 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');


 router.post ('/restu_register',(req,res)=>{
  
   
    let resturant={
      vend_id:req.body.vend_id,
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      cell_phone:req.body.cell_phone,
      address:req.body.address,
      tax_num:req.body.tax_num,
      
    }
    datb.query('INSERT INTO tblvendor SET ?',resturant, function (error, results, fields) {
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
  
    });
  });


module.exports = router ;