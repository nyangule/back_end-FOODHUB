const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const datb = require('../database/database');

/* GET users listing. */
router.get('/restu_login', function(req, res) {

   var email = req.body.email;
   var password = req.body.password;

   datb.query('select * from restuarant_admin where email = ?',[email],(error,result)=>{
       if(error){
           res.send({"message":"error ocurred"});
       } else{
            if(result[0]){
               if(result[0].password == password){
                   res.send({"message":"login sucessfull"});
               } else{
                   res.send({"message":"Email and password does not match"});
               }  
           }else{
               res.send({"message":"Email does not exits"});
           }
       }
   }); 
});

module.exports = router;
