 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');

router.post ('/cust_register',(req,res)=>{

  let cust={
    name:req.body.name,
    surname:req.body.surname,
    address:req.body.address,
    email:req.body.email,
    cell_no:req.body.cell_no,
    password:req.body.password
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
 
module.exports =router;
