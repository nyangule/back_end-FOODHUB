const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.put('/restu_update', (req,res)=>{
    let restuarant ={ 
      restuarant_id:req.body.restuarant_id,
      system_id:req.body.system_id,
      restuarant_name:req.body.restuarant_name,
      address:req.body.address,
      password:req.body.password,
      email:req.body.email
          
    }
    let email = (req.body.email)  
    datb.query('UPDATE restuarant_admin SET ? WHERE email = "'+email+'"',[restuarant],function (error, results, fields)
    {
        if (error) throw error 
        else{
          datb.query('select * from restuarant_admin where email = "'+email+'"',[restuarant],function (error, results, fields){
              return res.send({results})
          })
      
          }
    })

})


module.exports = router ;