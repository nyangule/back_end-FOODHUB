// const express = require('express');
// const mysql = require('mysql');
// const router = express.Router();
// const datb = require('../database/database');


// router.put('/reset_password', function(req, res) {
     
//     var e_email = req.body.email_address;
//     var newPassword = req.body.newPassword;
//     var confirmPassword = req.body.confirmPassword;

//     let pass = { 
//         password: newPassword
//            }
   
//     if(newPassword != confirmPassword){
//         res.send({"message":"confirm password is not matched"})
//     }
//     else
//     {
//     datb.query('update customer set ? where email = "'+e_email+'"',[pass],(error,result)=>{
        
//         if(error){
//             res.send({"message":"error occurred"});
//         }
//         else{
//             if(e_email != req.body.email_address){
//                 res.send({"message":"Email not registered!"});  
//                 } 
//         else{
            
//               res.send({"message":"Password has been successfully changed"}); 
            
//         }
//         }
//     });
//     }
// });

// module.exports = router;
