var db = require.main.require('./models/mysql');
var dj = {};

module.exports = function(req,res){
  db.skill.findtags().then(function(data){
    if (JSON.stringify(data) !== '[]' && JSON.stringify(data) !== '{}'){
        dj.skilltags = data;
    } else {
        dj.skilltags = null;
        }
    dj.tagselect = ["mysql","nginx","javascript","shell"];
    
    res.render('admin/skill-editor',dj);
  });    
}
