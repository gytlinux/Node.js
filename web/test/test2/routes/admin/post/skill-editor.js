var db = require.main.require('./models/mysql');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: 'public/images/'}).single('editormd-image-file');


module.exports = function(req,res){
  upload(req,res,function(err){
    if (err){console.log(err)};
    var title = req.body['article-title'];
    var tag = req.body['article-tag'];
    var createtime = new Date().toLocaleString();
    var updatetime = new Date().toLocaleString();
    var intro = req.body['article-intro'];
    var content = req.body['editormd-markdown-doc'];
    if (title === undefined || tag === undefined || intro === undefined || content === undefined) {
        console.log('null');
        } else {
        var sql = [title,tag,createtime,updatetime,intro,content];
        db.skill.insert(sql).then(function(data){
            console.log('ok');
            res.redirect('/admin/skill/edit');
            });
        }        
    if (req.file){
      var file = req.file;
      var new_file = file.destination+file.originalname
      var imageSrc = "/img/"+file.originalname
      console.log(file);
      console.log(new_file);
      fs.rename(file.path,new_file,function(err){
        if (err) {console.log(err)};        
        })
      res.json({
        success:1,
        message:"上传成功！",
        url:imageSrc
        });
    }
  });
}
