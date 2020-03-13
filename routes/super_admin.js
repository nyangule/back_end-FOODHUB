
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

// vendor / customer/ and himself (super admin) CRUD
// products/ menu/ categories orders(vendor/restaurant)

// view all admins

router.get('/admin', (req,res)=>{

    datb.query('SELECT * FROM system_admin',function(error,results,fields){
 
        if(error)
        {
            res.send({"failed":"error occurred"})
        }
        else{
                   return res.send(results)
            }

    });
});

// view all customers
router.get('/allCustomers', (req,res)=>{

    datb.query('SELECT * FROM customers',function(error,results,fields){
 
        if(error)
        {
            res.send({"failed":"error occurred"})
        }
        else{
                   return res.send({data:results})
            }

    })
});

//view one customer
router.get('/aCustomer/:customer_ID', (req, res) => {

    let customer_ID ={customer_ID:req.body.customer_ID}
 
   datb.query('SELECT * FROM customers WHERE  customer_ID = ?',[customer_ID], (error, results,fields) => {
       if(error) throw error;
       res.send({results});
   });
});




// view all  restaurants
router.get('/allrestuarant', (req,res)=>{

    datb.query('SELECT * FROM restuarant_admin',function(error,results,fields){
 
        if(error)
        {
            res.send({"failed":"error occurred"})
        }
        else{
                   return res.send({data:results})
            }

    });
});

router.get('/aRestaurant/:restuarant_id', (req, res) => {

    let restuarant_id ={restuarant_id:req.body.restuarant_id}
 
   datb.query('SELECT * FROM restuarant_admin WHERE  restuarant_id = ?',[restuarant_id], (error, results,fields) => {
       if(error) throw error;
       res.send({results});
   });
});




//done

  // update restaurant  profile 
  router.put('/restu_update', (req,res)=>{
    let restuarant ={ 
      restuarant_id:req.body.restuarant_id,
      restuarant_name:req.body.restuarant_name,
      address:req.body.address,
      password:req.body.password,
      email:req.body.email
          
    }
    let email = (req.body.email)  
    datb.query('UPDATE restuarant_admin SET ? WHERE email = "'+email+'"',[restuarant],function (error, results, fields)
    {
        if (error) throw error 
        else{
          datb.query('select * from restuarant_admin where email = "'+email+'"',[restuarant],function (error, results, fields){
              return res.send({results})
          })
      
          }
    })

})





    // update customer profile 
    router.put('/cust_update', (req,res)=>{
        let cust ={ 
            customer_ID:req.body.customer_ID,
            name:req.body.name,
            surname:req.body.surname,
            email_address:req.body.email_address,
            cell_no:req.body.cell_no,
            password:req.body.password    
           }
      let email_address = (req.body.email_address)
           
        datb.query('UPDATE customer SET ? where email_address = "'+email_address+'"',[cust],function (error, results, fields)
        {
            if (error) throw error;
            else
            {
              datb.query('select * from customer where email_address = "'+email_address+'"',[cust],function (error, results, fields){
              return res.send({results})
          })
        }       
          })
        })
    

           // deleting customer / restaurant profile permanently
        router.delete('/customer/:id',function(req, res){
   
            datb.query('DELETE FROM customer WHERE customer_ID = ?',[req.params.id], (err,results,fields)=>{
                 
              if(!err){
                res.send('Deleted successfully.');
            }else{
                console.log(err)
            }
            }); 
        });

        router.delete('/restuarant/:id',function(req, res){
   
            datb.query('DELETE FROM restuarant_admin WHERE restuarant_id = ?',[req.params.id], (err,results,fields)=>{
                if(!err){
                            res.send('Deleted successfully.');
                        }else{
                            console.log(err)
                        }
               }); 
            })
        

        // deleting customer profile
       router.put('/deactivate',(req ,res)=>{

       // let cust_status = req.body.cust_status;
        let customer_ID = req.body.customer_ID
        
      // select * from customer where cust_status = 1.


        datb.query('UPDATE  restuarant_admin  SET cust_status = 0 where customer_ID =  "'+customer_ID+'"',/*[cust_status]*/(error,results,fields)=>
        {
            if(error) throw error
            else{
                datb.query('select * from  restuarant_admin where cust_status = 1',function(error,results,fields){
                    return res.send({results})
                })
            }
        }

       )});

       


       
       router.put('/deactivate',(req ,res)=>{

        // let cust_status = req.body.cust_status;
         let customer_ID = req.body.customer_ID
         
       // select * from customer where cust_status = 1.
 
 
         datb.query('UPDATE customer  SET cust_status = 0 where customer_ID =  "'+customer_ID+'"',/*[cust_status]*/(error,results,fields)=>
         {
             if(error) throw error
             else{
                 datb.query('select * from customer where cust_status = 1',function(error,results,fields){
                     return res.send({results})
                 })
             }
 
         }
 
        )});





       //Accept or decline the Applications

       router.put('/Decline',(req ,res)=>{

        // let cust_status = req.body.cust_status;
         let restuarant_id = req.body.restuarant_id
         datb.query('UPDATE restuarant_admin  SET rest_status = 0 where restuarant_id =  "'+restuarant_id+'"',/*[cust_status]*/(err,results,fields)=>
        {
          if(err) throw err
            // res.send('status changed !!')
     else 
         {
          datb.query('select * from restuarant_admin where rest_status = 0',/*[cust]*/function (error, results, fields){
                              return res.send({results})

       })
     }
   }  
        )});
    
        
        router.put('/Accept',(req ,res)=>{

            // let res_status = req.body.res_status;
             let restuarant_id = req.body.restuarant_id
             datb.query('UPDATE restuarant_admin  SET rest_status = 1 where restuarant_id =  "'+restuarant_id+'"',/*[rest_status]*/(err,results,fields)=>
             {
                
            if(err) throw err
            //res.send('status changed !!')
        else 
        {
           datb.query('select * from restuarant_admin where rest_status = 1 ',/*[cust]*/function (error, results, fields){
               return res.send({results})

        })
    }
   }  
    
        )});


        




module.exports = router;