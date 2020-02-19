const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

router.put('/cust_update', (req,res)=>{
  let cust ={ 
      name:req.body.name,
      surname:req.body.surname,
      address:req.body.address,
      email_address:req.body.email_address,
      cell_no:req.body.cell_no,
      password:req.body.password   
     }
let customer_ID = (req.body.customer_ID)
     
  datb.query('UPDATE customer SET ? where customer_ID = "'+customer_ID+'"',[cust],function (error, results, fields)
  {
      if (error) throw error;
      else
      {
        datb.query('select * from customer where customer_ID = "'+customer_ID+'"',[cust],function (error, results, fields){
        return res.send({results})
    })
  }       
    })
  })

  //done

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
        




module.exports = router ;