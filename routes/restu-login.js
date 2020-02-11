const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');


router.get('/res_login', (req,res)=>{

  datb.query('SELECT * from tblvendor where email = ?', [email],function(error,results,fields){
 
    if(error){
       res.send({
           "failed":"error occured"
       })
    }
    else{
        if(results.length>0){
            if(results[0].password==passord)
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