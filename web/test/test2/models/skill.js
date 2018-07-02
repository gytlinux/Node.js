var pool = require('./pool.js');

let table = `create table if not exists skill(
             id int not null auto_increment,
             title varchar(100) not null unique,
             tag varchar(100) not null,
             createtime varchar(100) not null,
             updatetime varchar(100) not null,
             intro varchar(500) not null,
             content longtext not null,
             primary key ( id )
             ) default charset=utf8;`

pool.createTable(table);


let insert = function(value){
    let dbsql = "insert into skill set title=?,tag=?,createtime=?,updatetime=?,intro=?,content=?;"
    return pool.query(dbsql,value);
    }

let deleteid = function(id){
    let dbsql = `delete from skill where id="${id}";`
    return pool.query(dbsql,[]);
    }

let update = function(value){
    let dbsql = "update skill set title=?,tag=?,updatetime=?,intro=?,content=? where id=?;"
    return pool.query(dbsql,value);
    }

let findbar = function(id){
    let dbsql = `select * from skill where id="${id}";`
    return pool.query(dbsql,[]);
    }

let findall = function(order){
    let dbsql = `select * from skill order by "${order}" desc;`
    return pool.query(dbsql,[]);
    }

let findallpage = function(value){
    let dbsql = "select * from skill order by ? desc limit ?,?;"
    return pool.query(dbsql,value);
    }

let findtags = function(){
    let dbsql = "select distinct tag from skill;"
    return pool.query(dbsql,[])
    }

let findtagall = function(value){
    let dbsql = "select * from skill where tag=? order by ? desc;"
    return pool.query(dbsql,value);
    }

let findtagpage = function(value){ 
    let dbsql = "select * from skill where tag=? order by ? desc limit ?,?;"
    return pool.query(dbsql,value)
    }
    

module.exports = {
    insert,
    deleteid,
    update,
    findbar,
    findall,
    findallpage,
    findtags,
    findtagall,
    findtagpage
    }

