require('dotenv').config();
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticate = require("../middleware/authenticate")
var jwt = require('jsonwebtoken');
const Salt_round = 10;
//Mongoose-module
const user = require('../db/Userschema');


//Routes


router.get("/ToDo", authenticate, (req, res) => {
    res.send(req.ToDoList);
})
router.get("/getdata", authenticate, (req, res) => {
    res.send(req.rootUser);
})
router.get("/Logout", authenticate, async(req, res) => {
   try{
    res.clearCookie('jwtToken', { path: '/' });
    res.status(200).send("User Logout");
    console.log("User is logged Out");
    res.render('/login');
   }catch (error){
      res.status(500).send(error);
      console.log("User is not logged Out"); 
      console.log(error);
   }
})
router.post("/signup", (req, res) => {

    bcrypt.hash(req.body.password, Salt_round, function (err, hash) {

        user.findOne({ email: req.body.email }, (err, foundUser) => {
            if (!foundUser) {
                bcrypt.compare(req.body.confirmPassword, hash, function (err, result) {
                    if (result) {
                        const newUser = user({
                            username: req.body.username,
                            email: req.body.email,
                            password: hash,
                            confirmPassword: hash,
                            token: ""
                        })
                        const token = jwt.sign({ _id: newUser._id }, process.env.SECRET_KEY);
                        newUser.token = token;
                        console.log("User: " + newUser);
                        newUser.save();
                        res.cookie("jwtToken", newUser.token, {
                            expires: new Date(Date.now() + 3000000),
                            httpOnly: true
                        })

                        res.status(201).json({ message: "Successfuly Registered!!" });
                        console.log("Successfuly Registered!!");
                    }
                    else {
                        res.status(200).json({ error: "Invalid Credentials!!" });
                        console.log("Invalid Credentials!!");
                    }
                });
            }
            else {
                res.status(403).json({ error: "Email already exist" });
                console.log("Email already exist");
            }

        });
    })
});
router.post("/login", (req, res) => {
    user.findOne({ username: req.body.username }, (err, foundUser) => {
        if (foundUser) {
            bcrypt.compare(req.body.password, foundUser.password, function (err, result) {
                if (result) {
                    console.log(foundUser.token);
                    res.cookie("jwtToken", foundUser.token, {
                        expires: new Date(Date.now() + 3000000),
                        httpOnly: true
                    });
                    res.json({ message: `Successfully login` });
                }
                else {
                    res.status(401).json({ error: "Password doesn't match!!" });
                }
            });
        } else {
            res.status(400).json({ error: "No such User found!!" });
        }
    })
})
router.post("/contact", authenticate, async (req, res) => {
    try {
        const { username, email, subject, message } = req.body;

        if (!username | !email || !subject || !message) {
            console.log("Please fill all the field");
            return res.json("Please fill all the field");
        }
        const userContact = await user.findOne({ _id: req.userID });
        if (userContact) {
            const userMessage = await userContact.addMessage(username, email, subject, message);
            await userContact.save();
            res.status(201).json({ message: "Successfully Sent message" });
        }
    } catch (error) {
        console.log(error);
    }
})
router.post("/ToDo",authenticate,async(req,res)=>{
    try {
    const item = req.body.userdata;
    if(!item){
        console.log("Please fill all the field");
        return res.json("Please fill all the field");
    }
    const userContact = await user.findOne({ _id: req.userID });
    if(item){
        const userMessage = await userContact.addList(item);
            await userContact.save();
            res.status(201).json({ message: "Successfully added list" });
            res.render('/ToDo');
    }
}catch (error) {
    console.log(error);
}
})
router.post('/delete',authenticate,(req,res)=>{
    const id=req.body.id;
    console.log("ID: "+req.userID);
     user.findOne({_id:req.userID},function(err,result){
         if(err){
             console.log(err);
             res.send({error:"error while deleting"});
         }else{
            
            user.updateOne( { "_id":req.userID}, { $pull :{"TodoList":{"_id":id}} } ,
            function(err,results){
                 if(err){
                     console.log(err);
                 }else{
                     console.log(results);
                 }
             })
         }
     })
})

module.exports = router;
