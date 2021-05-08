const path = require('path');//reuiring path module to join paths
const router = require('express').Router();//router object to handle requests
 
// router.get('/',(req , res , next )=>{//functioning on hitting blank link
//     console.log(__dirname);
//    console.log(" inside blank slash");
// });

router.get('/',(req , res , next)=>{//functioning on hitting link '/addproduct'
//    res.send("<h1 style='text-align:center;color:olive;'>Add products here!!!<h1>")
     res.sendFile(path.join(__dirname , "../" , "views" , "adminView.html"));
});

router.get('/addproduct',(req , res , next)=>{//functioning on hitting link '/addproduct'
    //    res.send("<h1 style='text-align:center;color:olive;'>Add products here!!!<h1>")
         res.sendFile(path.join(__dirname , "../" , "views" , "fillform.html"));
    });
    
router.post('/addproduct',(req , res , next) =>{
   res.redirect('/shophome');  
});



module.exports = router; //module is a variable & export is an object
// Anything assigned to it will impose as a module.