const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');
   

router.post ('/apply',(req,res)=>{

    let rest={
        tax_number:req.body.tax_number,
        restuarant_name:req.body.restuarant_name,
        address:req.body.address,
        password:req.body.password,
        email_address:req.body.email_address
      }
    
      datb.query('SELECT * FROM restuarant_admin where email_address = ?', rest.email_address, (error, results)=>{
     if(results[0]){
      res.send({'message':'User already exits'});
    }else{
      datb.query('INSERT INTO restuarant_admin set ?', [rest], (error, results)=>{
        if(error){
          res.send({'message':'Something went wrong!'});
        }else{
          res.send({'message':'User successfully Registered!'});
        }
      })
    }
    }) 
    });
     
module.exports = router;