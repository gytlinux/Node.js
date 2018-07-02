var db = require.main.require('./models/mysql');
var dj={}

module.exports = function(req,res){
  dj.page = Number(req.query.page || 1);
  dj.limit = 10;
  dj.pages = 0;
  var order = "createtime" || null;
  db.skill.findtags().then(function(data){
    if (JSON.stringify(data) !== '{}' && JSON.stringify(data) !== '[]'){
        dj.skilltags = data;
    } else {
        dj.skilltags = null;
        }
    if (req.query.tag) {
        dj.tag = req.query.tag;
        db.skill.findtagall([dj.tag,order]).then(function(data){
            dj.count = data.length
            dj.pages = Math.ceil(dj.count / dj.limit);
            dj.page = Math.min(dj.page,dj.pages);
            dj.page = Math.max(dj.page,1);
            var skip = (dj.page - 1) * dj.limit
            db.skill.findtagpage([dj.tag,order,skip,dj.limit]).then(function(data){
              dj.articles = data;                        
              res.render('admin/skill',dj);
              });
          });
        }else{
          dj.tag = null;
          db.skill.findall(order).then(function(data){
            dj.count = data.length
            dj.pages = Math.ceil(dj.count / dj.limit);
            dj.page = Math.min( dj.page, dj.pages );
            dj.page = Math.max( dj.page, 1 );
            var skip = (dj.page - 1) * dj.limit

            db.skill.findallpage([order,skip,dj.limit]).then(function(data){
              dj.articles = data;
              res.render('admin/skill',dj);
              });
          });
       }
  });
};

