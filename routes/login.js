const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const bodyParser = require('body-parser');

 router.use(session({
      	secret:'secret',
	   resave: true,
	  saveUninitialized: true
 }));

 router.use(bodyParser.urlencoded({extended : true}));
 router.use(bodyParser.json());


router.get('/cust_login', function(req, res) {

    let email = req.body.email_address;
    let password = req.body.password;

    if(!email)
    {
        res.send({message:'enter correct email address'})
    }
 
    datb.query('select * from customer where email_address = ?',[email],(error,result)=>{
        if(error){
            res.send({"message":"error ocurred"});
        }else{
             if(result[0]){
                if(result[0].password == password){
                  
               jwt.sign({email},'secretkey',{expiresIn :'30'},(err,token)=>{
                response.json({
                    token,
                 email:results
                });
               })

                   //res.send({"login successfully":result});
                    
                } else{
                    res.send({"message":"Email and password does not match"});
                }  
            }else{
                res.send({"message":"Email does not exits"});
            }
        }
    }); 
 });
 
 


 router.get('/restu_login', function(req, res) {

    var email = req.body.email_address;
    var password = req.body.password;
 
    datb.query('select * from restuarant_admin where email = ?',[email,password],(error,result)=>{
        if(error){
            res.send({"message":"error ocurred"});
        } else{
             if(result[0]){
                if(result[0].password == password){

        
                    res.send({"login successfully":result});
                } else{
                    res.send({"message":"Email and password does not match"});
                }  
            }else{
                res.send({"message":"Email does not exits"});
            }
        }
    }); 
 });
 


 router.get('/Admin_login', function(req, res) {

    var email = req.body.email_address;
    var password = req.body.password;
 
    datb.query('select * from system_admin where email = ?',[email,password],(error,result)=>{
        if(error){
            res.send({"message":"error ocurred"});
        } else{
             if(result[0]){
                if(result[0].password == password){
                    res.send({"login successfully":result});
                } else{
                    res.send({"message":"Email and password does not match"});
                }  
            }else{
                res.send({"message":"Email does not exits"});
            }
        }
    }); 
 });

 //logout

 router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/login');
  });


module.exports = router;

//done

 


