const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.put('/cust_update', (req,res)=>{
    let cust ={ 
        customer_ID:req.body.customer_ID,
        name:req.body.name,
        surname:req.body.surname,
        email_address:req.body.email_address,
        cell_no:req.body.cell_no,
        password:req.body.password    
       }
  let email_address = (req.body.email_address)
       
    datb.query('UPDATE customer SET ? where email_address = "'+email_address+'"',[cust],function (error, results, fields)
    {
        if (error) throw error;
        else
        {
          datb.query('select * from customer where email_address = "'+email_address+'"',[cust],function (error, results, fields){
          return res.send({results})
      })
    }       
      })
    })

module.exports = router ;