const mongoose = require('mongoose');

async function connectDatabase() {
    mongoose.connect('mongodb://localhost:27017/library')    //connect my local mongodb host with database name library
    .then(()=>{
        console.log("Database connected...");
    }).catch(()=>{
        console.log("Failed to connect database ");
    })
}

module.exports = {
    connectDatabase
}