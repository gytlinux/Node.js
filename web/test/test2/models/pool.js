var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
    });

var query = function(sql,value){
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,con){
            if (err) {
                reject(err);
                } else {
                con.query(sql,value,function(err,data){
                    if (err){
                        reject(err);
                        } else {
                        resolve(data);   
                        };
                    con.release();
                    });  
                };
            });
        });
    };

let createTable = function(sql){
    return query(sql,[]);
    }

module.exports = {
    query,
    createTable
    };
