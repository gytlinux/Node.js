var db = require.main.require('./models/mysql');

var dj={}

module.exports = function(req,res){    
    var id = req.query.contentid
    var next = Number(id)-1
    var previous = Number(id)+1
    var tags = db.skill.findtags();
    var page = db.skill.findbar(id);
    var nextpage = db.skill.findbar(next);
    var prespage = db.skill.findbar(previous);
    Promise.all([tags,page,nextpage,prespage]).then(function(data){
        dj.tags = data[0];
        dj.content = data[1][0];
        dj.next = data[2][0];
        dj.previous = data[3][0];
        res.render('skill/article',dj);
        })
};

