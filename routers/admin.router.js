const { Router } = require("express");
const { indexPage } = require("../controllers/admin.controller");

const admin_Router = Router();

admin_Router.get('/',indexPage)
module.exports = admin_Router;