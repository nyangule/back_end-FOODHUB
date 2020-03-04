 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');

 router.put('/accept_decline', (req, res) => {
   
    let order_status = (req.body.order_status) 

    datb.query('UPDATE order SET order_status = 1 WHERE orderID = ? ', [order] , (error, results, fields) =>
    {
        if (error) {throw error}
 
        else
        {
      
          datb.query('select * from order WHERE order_status  = 0 ' , [order] , (error, results, fields) =>
          {
            return res.send({results})
          })
        }
    })
});

 module.exports = router;