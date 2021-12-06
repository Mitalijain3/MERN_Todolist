const mongoose = require('mongoose');


//Mongoose
//Connect
mongoose.connect(process.env.DB)
    .then(() => {
        console.log("mongoDB connection is successfull");
    }).catch((err) => {
        console.error(err);
    })




