const CatModel = require("../models/category.schema");

exports.catPage = (req,res)=>{
    res.render('./pages/addcat');
}

exports.addcat = async (req,res)=>{
    try {
        let data = await CatModel.create(req.body);
        console.log(data);
        return res.redirect('back');
    } catch (error) {
        res.send(error.message);
    }
}
    
exports.viewCat = async (req,res)=>{
    try {
        let cat = await CatModel.find({});
        return res.render('./pages/viewCat',{cat});
        } catch (error) {
            res.send(error.message);
        }
}

exports.deletecat = async (req, res) => {
    try {
        const { id } = req.params;
        await CatModel.findByIdAndDelete(id);
        return res.redirect('/cat/view');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


