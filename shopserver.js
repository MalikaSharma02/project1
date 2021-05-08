const path = require('path');//requiring path module to work with directory path and file paths.
const express = require("express");//requiring express module server
const app = express();//making call to the express server
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());
 
app.use(express.static(path.join(__dirname , "public")));
app.use('/admin',adminRoutes);//middlewares in between

app.use(userRoutes);//middleware

app.listen(3000);
