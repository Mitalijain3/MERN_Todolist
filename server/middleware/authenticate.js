const jwt =require("jsonwebtoken");
const User= require("../db/Userschema");
const authenticate =async (req, res, next) => {
console.log("middleware");
try{
const token = req.cookies.jwtToken;
const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
const rootUser= await User.findOne({_id:verifyToken._id,"token":token});
if(!rootUser){
    throw new Error("User not found");
}
req.token= token;
req.rootUser=rootUser;
req.ToDoList=rootUser.TodoList;
req.userID=rootUser._id;
console.log(rootUser);
next();
}catch(err){
    res.status(401).json({error:"Unauthorized: No token provided"});
    console.log(err);
}
}
module.exports=authenticate;