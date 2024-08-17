const { Router } = require("express");
const { addProduct, productPage, viewProducts } = require("../controllers/product.controller");
const upload = require("../middlewares/multer.middleware");

const P_router = Router();

P_router.post('/', upload,addProduct);
P_router.get('/', productPage);
P_router.get('/view', viewProducts);


module.exports =  P_router;