const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');


router.get('/restu_login', (req,res)=>{
    let email =( {email:req.body.email})

  datb.query('SELECT * from restuarant_admin where email = ?', [email],function(error,results,fields){
 
    if(error){
       res.send({
           "failed":"error occured"
       })
    }
    else{
        if(results){
            if(results)
            {
                res.send({
                   "success":"login successful" 
                })
            }
            else{
                res.send({
                    "sucsess":"Email and passord do not match"
                })
            }
        }
    }
  })
})

module.exports = router ;