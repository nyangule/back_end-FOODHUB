const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');




router.get('/.ViewUpdateHistory', (req, res) =>{

    const order_id = req.body.order_id;

    datb.query('SELECT * FROM orders', [orders], (error, result, field) => {
        if (error) {
            throw error;
        }else {
            res.json({data: result, status: 200, message: 'Overall Order History.' });;
        }
    })
});


// 2.) View order of a customer.


router.get('/.ViewUpdateHistory/:id', (req, res) =>{

    let id = {customer_ID:req.body.customer_ID};

    datb.query('SELECT * FROM orders WHERE customer_ID = ?', [customer_ID], (error, result, fields) => {
        if (error) {
            throw error;
        }else {
            res.json({data: result, status: 200});
        }
    })
});


router.put('./ViewUpdateHistory/:order_id', (req, res) => {

    const order_status = {order_status:order_status.req.body.order_status};

    datb.query('UPDATE orders SET ? WHERE order_status = 0', [order_status], (req, result, fields) =>{
        if (error) {
            throw error
        }else {
            datb.query('SELECT * FROM orders WHERE customer_ID = ?', [customer_ID], (error, result, fields) =>{
                return res.json({data: result, status: 200, message: 'order updated successfuly.'});
            });
        }
    });
});

module.exports = router;