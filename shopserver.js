const express = require("express");//requiring express module server
const app = express();//making call to the express server

app.use('/admin',adminRoutes);

app.use(userRoutes);

app.listen(3000);
