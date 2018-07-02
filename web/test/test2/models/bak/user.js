var pool = require('./pool.js');

let table = `create table if not exists user(
             id int not null auto_increment,
             name varchar(100) not null unique,
             passwd varchar(100) not null,
             email varchar(100) not null,
             createtime varchar(100) not null,
             intro varchar(500) not null,
             primary key (id)
             ) default charset=utf8;`

pool.createTable(table);


let insert = function(value){
    let dbsql = "insert into user set name=?,passwd=?,email=?,createtime=?,intro=?;"
    return pool.query(dbsql,value);
    }

let deleteid = function(id){
    let dbsql = `delete from user where id="${id}";`
    return pool.query(dbsql,[]);
    }

let update = function(value){
    let dbsql = "update user set name=?,passwd=?,email=?,intro=? where id=?;"
    return pool.query(dbsql,value);
    }

let findbar = function(id){
    let dbsql = `select * from user where id="${id}";`
    return pool.query(dbsql,[]);
    }

let findall = function(){
    let dbsql = "select * from user;"
    return pool.query(dbsql,[]);
    }

let findallpage = function(value){
    let dbsql = "select * from user limit ?,?;"
    return pool.query(dbsql,value);
    }
    

module.exports = {
    insert,
    deleteid,
    update,
    findbar,
    findall,
    findallpage
    }

