

module.exports = function(req,res){
    console.log(req.body);
    var test={
        code:0,
        body:"post"
        }
    res.json(test)
    }
