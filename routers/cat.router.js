const { Router } = require("express");
const { catPage, addcat, viewCat, deletecat } = require("../controllers/cat.controller");

const catRouter = Router();

catRouter.get('/', catPage)
catRouter.post('/',addcat);
catRouter.get('/view',viewCat);
catRouter.delete('/deletecat/:id', deletecat);

module.exports = catRouter;
