const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.get('/restu_update', (req,res)=>{
    let restuarant ={ 
        restaurant_id:req.body.restaurant_id,
        name:req.body.name,
        email:req.body.email,
        cell_phone:req.body.cell_phone,
        address:req.body.address
          
       }
       
    datb.query('UPDATE restuarant_admin SET ? WHERE ?',[restuarant]),function (error, results, fields)
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