//jshint esversion:6
require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

//app
const app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//Mongoose-connection
require('./db/connection');
//Mongoose-module
const user=require('./db/Userschema');

//json-format
app.use(express.json());

//Routes
app.use(require("./router/routes"));

//PORT
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}


const PORT =process.env.PORT||4000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})





















