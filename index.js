const express = require('express');
const db = require('./config/databasse');
const bodyparser = require('body-parser');
const path = require('path');
const admin_Router = require('./routers/admin.router');
const P_router = require('./routers/Product.router');
const catRouter = require('./routers/cat.router');
const port = 8001;

const app = express();
app.use(bodyparser.urlencoded({extened:true}));
app.use(express.static(path.join(__dirname+ '/public')));
app.use('/uploads',express.static(path.join(__dirname+ '/uploads')));

app.set('view engine', 'ejs');

app.use(admin_Router);
app.use('/product', P_router);
app.use('/cat', catRouter);

app.listen(port,(err)=>{
    db();
    if(err) console.log('Error in server setup');
    console.log('Server is running on port http://localhost:'+port);
});
