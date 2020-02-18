const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../data/data');

router.get('/search',function(req,res){
 
    let product ={product_name:req.query.product_name}

    datb.query('SELECT product_name from products where product_name = "%'+product_name+'%"',[product],
    function(error, results, fields) {
        if(error) throw error;
        else
        {    
            datb.query('SELECT * from products where product_name = "%'+product_name+'%"', [product],
            function(error, results, fields){
            return res.send({'the products are':results})
        }
            )}
    }); 

})
 
module.exports = router;