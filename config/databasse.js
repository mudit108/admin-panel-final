const mongoose = require('mongoose');
require('dotenv').config();

let URL = process.env.DB_URL;   
console.log(URL);

let db = async () =>{
    await mongoose.connect(
        URL
    )
    console.log('DB connected');
}
module.exports = db;