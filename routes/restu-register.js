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

    datb.query('INSERT INTO restuarant_admin SET ?',[restaurant], function (error, results, fields) {
      module.exports = router;

      if (error) 
        {
          console.log("error occurred",error);
            res.send({
            "code":400,
            "failed":"error occurred"
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