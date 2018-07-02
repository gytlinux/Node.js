var db = require.main.require('./models/mysql');
var tags = require('../modules/tags');
var dj={}
module.exports = function(req,res){
    tags(function(data){
        dj.skilltags = data[0];
        dj.inktags = data[1];
            
        res.render('admin',dj);
        })
    }
