const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.delete('/cust_delete',function(req, res){
   
let connection = mysql.createConnection(datb);
let email = ({email_address:req.body.email_address});
//let sql = 'DELETE FROM customer where email_address = "'+email_address+'"'
   
   connection.query('DELETE FROM customer where email_address = "'+email+'"', [email], function(error, results, fields){
       if(error) throw error;
       else
       {
           return res.send({'records has been deleted!!':results})
       }
   }); 
})

module.exports = router;