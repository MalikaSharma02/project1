const path = require('path');//path module
const router = require('express').Router();//a new router object created to handle requests.

router.get('/shophome',(req , res , next) =>//working for the link shophome inside the middleware
{
    res.send("<h1 style='color:purple;text-align:center;'>This is the homepage</h1>");
    // res.sendFile(path.join())
});
 module.exports =  router;//module is a variable & export is an object
                          // Anything assigned to it will impose as a module.