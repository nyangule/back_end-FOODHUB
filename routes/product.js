const express = require('express');
const router = express.Router();
const mysqlConn = require('../database/database')

router.post('/b', (req, res) => {
    let prod = ({
        product_id: req.body.order_id,
        name: req.body.name,
        price: req.body.price


    })
    mysqlConn.query('INSERT INTO products SET  ?', [prod], function (error, results, fields) {
        if (error) {
            res.send({ message: 'there are some error with query' })
        } else
            res.send({ message: 'inserted' })
    })
});

module.exports = router;