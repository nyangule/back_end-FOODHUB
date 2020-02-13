const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.get('/cust_update', (req,res)=>{
    let cust ={ 
        
        name:req.body.name,
        surname:req.body.surname,
        email_address:req.body.email_address,
        cell_no:req.body.cell_no,
        password:req.body.password    
       }
       
    datb.query('UPDATE customers SET ? WHERE ?',[cust]),function (error, results, fields)
    {
        module.exports =router;
        if (error) 
          {
            console.log("error ocurred",error);
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
      
          }
          else
          {
            console.log('The solution is: ', results);
            res.send({
              "code":200,
              "success":"user registered sucessfully"
                });
          }

        }

})


module.exports = router ;