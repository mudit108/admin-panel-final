const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
        }
})

const CatModel = mongoose.model('CatTbl2', CatSchema);

module.exports = CatModel;
