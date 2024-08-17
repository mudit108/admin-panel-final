const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
        },
    description :{
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
        },
    catId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'CatTbl2'
     }
})

const ProductModel = mongoose.model('ProductTbl', ProductSchema);

module.exports = ProductModel;
