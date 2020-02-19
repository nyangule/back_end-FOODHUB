const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const datb = require('../database/database');

/* GET users listing. */
router.get('/forgot_password', function(req, res) {
  
    var email = req.body.email;

    datb.query('select * from customer where email = ?',[email],(error,result)=>{
        if(error){
            res.send({"message":"error ocurred"})
        } else{
            if(result[0]){
                res.send({"message":"Reset password link sent to the registered mail"});       
            } else{
                res.send({"message":"This email is not registered "});
            }
        }
    });

});

module.exports = router;
