const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');

router.post('/createMenu', (req, res) => {
    let items = {
        items_name: req.body.items_name,
        items_price: req.body.items_price,
        items_description: req.body.items_description

    }
    var sql = "INSERT INTO menu SET ?";
             datb.query(sql, [items], function (err, results) {
                 if (!err) {
                     res.send({ message: 'inserted' })
 
                 } else {
                     res.send({ message: 'there are some error with query' })
                 }
             })
});


    router.get('/viewMenu', (req,res)=>{

        datb.query('SELECT * FROM  menu ',function(error,results,fields){
     
            if(error)
            {
                res.send({"failed":"error occurred"})
            }
            else{
                       return res.send({data:results})
                }
    
        });
    });


    router.put('/updateMenu', (req,res)=>{
        let items ={ 
            item_name: req.body.item_name,
            item_price: req.body.item_price,
            item_description: req.body.item_description
           }
      let item_id = (req.body.item_id)
           
        datb.query('UPDATE  menu  SET ? where item_id = "'+item_id+'"',[items],function (error, results, fields)
        {
            if (error) throw error;
            else
            {
              datb.query('select * from  menu  where item_id = "'+item_id+'"',[items],function (error, results, fields){
              return res.send({results})
          })
        }       
          })
        });


      
        // router.put('/deactivateProd',(req ,res)=>{

        //      let product_id = req.body.product_id

        //      datb.query('UPDATE products   SET status = 0 where product_id = "'+product_id+'"',(error,results,fields)=>
        //      {
        //          if(error) throw error
        //          else{
        //              datb.query('select * from products  where status =  1 ',function(error,results,fields){
        //                  return res.send({results})
        //              })
        //          }
     
        //      }
     
        //     )})
    
module.exports = router;