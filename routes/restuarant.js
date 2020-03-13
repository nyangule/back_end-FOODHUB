const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');


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


// new products
// router.post ('/createMenu',(req,res)=>{

//   let items={
    
//     item_name:req.body.item_name,
//     item_price:req.body.item_price,
//     item_description:req.body.item_description
//   };
//   let item_id = req.body.item_id
//   datb.query('SELECT * FROM menu where item_id = ?', items.item_id, (error, results)=>{
//     if(results){
//       res.send({'message':'item already exits'});
//     }else{
//       datb.query('INSERT INTO menu set ?', [items], (error, results)=>{
//         if(error){
//           res.send({results});
//         }else{
//             res.send({'message':'item inserted successfully!'});
//         }
//       })
//     }
//   })  
// });

router.post('/createMenu', function (req, res) {
  let items ={
      item_name:req.body.item_name,
      item_price:req.body.item_price,
      item_description:req.body.item_description

  }
           datb.query("INSERT INTO menu SET ?", [items], (err, results)=> {
               if (err) throw err
                else {
                   res.send({results})
               }
           })
});




// new category
router.post ('/new_category',(req,res)=>{

  let category={
  
    Breakfast:req.body.Breakfast,
    lunch:req.body.lunch,
    dinner:req.body.dinner,
    dessert:req.body.dessert 
  }

  datb.query('SELECT * FROM category_id where category_id = ?', category.email_address, (error, results)=>{
 if(results[0]){
  res.send({'message':'category already exits'});
}else{
  datb.query('INSERT INTO category_id set ?', [category], (error, results)=>{
    if(error){
      res.send({'message':'Something went wrong!'});
    }else{
      res.send({'message':'category successfully entered!'});
    }
  })
}
}) 
});


// restuarant update
router.put('/restu_update', (req,res)=>{
  let restuarant ={ 
    address:req.body.address,
    password:req.body.password,
    email_address:req.body.email_address      
  }
  let restuarant_id = (req.body.restuarant_id)  
  datb.query('UPDATE categories SET ? WHERE restuarant_id = "'+restuarant_id+'"',[restuarant],function (error, results, fields)
  {
      if (error) throw error 
      else{
        datb.query('select * from categories where restuarant_id = "'+restuarant_id+'"',[restuarant],function (error, results, fields){
            return res.send({results})
        })
    
        }
  })

})

// categories update

router.put('/categories_update', (req,res)=>{
  let category ={ 
    Breakfast:req.body.Breakfast,
    lunch:req.body.lunch,
    dinner:req.body.dinner,
    dessert:req.body.dessert      
  }
  let category_id = (req.body.category_id)  
  datb.query('UPDATE categories SET ? WHERE category_id  = "'+category_id +'"',[category],function (error, results, fields)
  {
      if (error) throw error 
      else{
        datb.query('select * from categories  where category_id = "'+category_id+'"',[category],function (error, results, fields){
            return res.send({results})
        })
    
        }
  })

})

// products menu

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


  // delete product 

  
router.put('/deactivateProd',(req ,res)=>{

  let product_id = req.body.product_id

  datb.query('UPDATE products   SET status = 0 where product_id = "'+product_id+'"',(error,results,fields)=>
  {
      if(error) throw error
      else{
          datb.query('select * from products  where status =  1 ',function(error,results,fields){
              return res.send({results})
          })
      }

  }

 )})



// delete restuarant

/*router.delete('/restu_delete/:id',function(req, res){
   
    let connection = mysql.createConnection(datb);
    //let email = ({email_address:req.body.email_address});
    //let sql = 'DELETE FROM restuarant_admin where email_address = "'+email_address+'"'
       
      connection.query('DELETE * FROM restuarant_admin where restuarant_id =?', [req.params.id], function(error, results, fields){
           if(error) throw error;
           else
           {
          return res.send({'records has been deleted':results})
           }
       }); 
    })*/


module.exports = router ;


