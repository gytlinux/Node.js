var db = require.main.require('./models/mysql');

module.exports = function(callbak){
    var skilltags = db.skill.findtags();
    var inktags = db.ink.findtags();
    Promise.all([skilltags,inktags]).then(function(data){
        if (JSON.stringify(data[0]) == '{}' || JSON.stringify(data[0]) == '[]'){
            data[0] = null;            
            } 
        if (JSON.stringify(data[1]) == '{}' ||JSON.stringify(data[1]) == '[]'){
            data[1] = null;            
            }        
        callbak(data)
        });
}
