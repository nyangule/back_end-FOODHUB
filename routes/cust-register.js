 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');

 router.post ('/cust_register',(req,res)=>{

    let cust={
      customer_ID:req.body.customer_ID,
      name:req.body.name,
      surname:req.body.surname,
      address:req.body.address,
      email_address:req.body.email_address,
      cell_no:req.body.cell_no,
      password:req.body.password
    }
    
  datb.query('INSERT INTO customer set ?',[cust], function (error, results, fields) {
  if (error) 
    {
      res.send({"failed":"error occurred"})
    }
    else
    {
      res.send({"success":"user registered successfully!"});
    }
  });
});
 
  module.exports =router;
