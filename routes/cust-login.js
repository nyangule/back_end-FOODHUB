const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');


router.get('/cust_login', (req,res)=>{
 let email_address =(req.body.email_address)

  datb.query('SELECT * FROM customer',function(error,results,fields){
 
    if(error)
    {
        res.send({"failed":"error occured"})
    }
    else{
               return res.send({data:results})
        }
    
  })
})


module.exports = router ;