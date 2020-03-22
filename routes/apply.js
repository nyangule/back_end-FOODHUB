const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');
const nodemailer = require('nodemailer');   

router.post ('/application',(req,res)=>{

        let rest={
          restuarant_id:req.body.restuarant_id,
          restuarant_name:req.body.restuarant_name,
          address:req.body.address,
          password:req.body.password,
          email_address:req.body.email_address
        }
        if(!rest)
          {
            res.send({'message': 'false'})
          }

      datb.query('SELECT * FROM restuarant_admin  where email_address = ?', rest.email_address, (error, results)=>{
        if(results[0]){
          res.send({'message':'restaurant already exits'});
        }else{
          datb.query('INSERT INTO restuarant_admin set ?', [rest], (error, results)=>{
            if(error){
              res.send({'message':'Something went wrong!'});
            }else{
              res.send({'message':'Application successfully submitted!'});
            }
          })
        /**/
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'kasifoodhub@gmail.com',
            pass: '2020#1food'
          }
        });
        
        var mailOptions = {
          from: 'kasifoodhub@gmail.com',
          to: rest.email_address,
          subject: 'Ekasi Foodhub',
          text: 'Your application is been approved!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            
          }
        }); 
        }
      }) 
  });
  
module.exports = router;