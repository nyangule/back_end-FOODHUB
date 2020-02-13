 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');


 router.post ('/restu_register',(req,res)=>{
  
   
    let restaurant={
      restaurant_id:req.body.restaurant_id,
      name:req.body.name,
      email:req.body.email,
      cell_phone:req.body.cell_phone,
      address:req.body.address,
      
    }

    datb.query('INSERT INTO restuarant_admin SET ?',[restaurant], function (error, results, fields) {
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
  
    });
  });


module.exports = router ;