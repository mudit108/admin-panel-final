const CatModel = require("../models/category.schema");
const ProductModel = require("../models/product.Schema")

exports.addProduct = async(req,res)=>{
    try {
        ProductModel.create({...req.body, image:req.file.path});
    return res.redirect('back');
    } catch (error) {
        return res.send(error.message);
    }
    
}
exports.productPage= async(req,res)=>{
    let cat = await CatModel.find({});
    return res.render('./pages/addProducts',{
        cat
    });
}

exports.viewProducts = async(req,res)=>{
    try {
        let products = await ProductModel.find({}).populate('catId');
        return res.render('./pages/viewProducts',{products});
    } catch (error) {
        return res.send(error.message);
    }
}

