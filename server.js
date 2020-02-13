const mysql = require('mysql');
const express = require('express');
const app = express();
var cors = require('cors')
const mysqlConn= require('./database/database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// api routes

 app.use('/', require('./routes/cust-login'));
 app.use('/', require('./routes/cust-register'));
 app.use('/', require('./routes/restu-login'));
 app.use('/', require('./routes/restu-register'));
 app.use('/', require('./routes/update-customers'));
 app.use('/', require('./routes/update-restu'));
 

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 2000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
