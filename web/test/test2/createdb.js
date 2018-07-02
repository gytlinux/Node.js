var mysql = require('mysql');
require('dotenv').config(); 

db = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    port : process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD
    });


var createbase = "create database if not exists "+
                 process.env.MYSQL_DB+
                 " default character set utf8 collate utf8_general_ci"

db.connect(function(err){
    if (err) {console.log(err)};
    db.query(createbase,function(err){
       if (err){console.log(err)};
       db.end();               
       });
    });
