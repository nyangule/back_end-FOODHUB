const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');

router.post('/enterProduct', (req, res) => {
    let prod = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description

    }
    var sql = "INSERT INTO products SET ?";
             datb.query(sql, [prod], function (err, results) {
                 if (!err) {
                     res.send({ message: 'inserted' })
 
                 } else {
                     res.send({ message: 'there are some error with query' })
                 }
             })
});


    router.get('/viewProduct', (req,res)=>{

        datb.query('SELECT * FROM  products ',function(error,results,fields){
     
            if(error)
            {
                res.send({"failed":"error occurred"})
            }
            else{
                       return res.send({data:results})
                }
    
        });
    });
    
    


module.exports = router;