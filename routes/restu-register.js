 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');


 router.post ('/restu_register',(req,res)=>{
  

    let restaurant={
      restuarant_id:req.body.restuarant_id,
      system_id:req.body.system_id,
      restuarant_name:req.body.restuarant_name,
      address:req.body.address,
      password:req.body.password,
      email:req.body.email
    }

    datb.query('SELECT * FROM customer where email = ?', cust.email, (error, results)=>{
   if(results[0]){
    res.send({'message':'User already exits'});
  }else{
    datb.query('INSERT INTO customer set ?', [cust], (error, results)=>{
      if(error){
        res.send({'message':'Something went wrong!'});
      }else{
        res.send({'message':'User successfully Registered!'});
      }
    })
  }
}) 
  });

module.exports = router ;