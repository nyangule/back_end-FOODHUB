const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');

router.post('/b', (req, res) => {
    let prod = ({
        product_id: req.body.order_id,
        product_name: req.body.product_name,
        product_price: req.body.product_price


    })
    datb.query('INSERT INTO products SET  ?', [prod], function (error, results, fields) {
        if (error) {
            res.send({ message: 'there are some error with query' })
        } else
            res.send({ message: 'inserted' })
    })
});

module.exports = router;