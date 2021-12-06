
const mongoose=require("mongoose");

//Mongoose
 //schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    confirmPassword:{
        type: String,
        required: true
    },
    token:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[{
        username:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        subject:{
            type: String,
            required: true,
        },
        message:{
            type: String,
            required: true
        },
    }],
    TodoList:[ { item:{
        type: String,
        required: true
    }}]
})

userSchema.methods.addMessage= async function(username,email,subject,message){
    try{
    this.messages= this.messages.concat({username,email,subject,message});
    }catch(error){
    console.log(error);
    }
   await this.save();
    return this.messages;
}
userSchema.methods.addList= async function(item){
    try{
    this.TodoList= this.TodoList.concat({item});
    }catch(error){
    console.log(error);
    }
   await this.save();
    return this.TodoList;
}
//model
const user= new mongoose.model("user",userSchema);
module.exports =user