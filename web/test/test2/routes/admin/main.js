var db = require.main.require('./models/mysql');
var dj={}

module.exports = function(req,res){
  db.skill.findtags().then(function(data){
    if (JSON.stringify(data) !== '{}' && JSON.stringify(data) !== '[]'){
       dj.skilltags = data;
       res.render('admin/index',dj);
    }
    res.render('admin/index');
  });
}
