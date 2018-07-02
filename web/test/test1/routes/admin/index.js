var express = require('express');
var router = express.Router();

var routes = {
        post:require('./post'),
        index:require('./admin.js'),
        skilleditor:require('./skilleditor.js')
    
    }

router.get('/',routes.index);
router.get('/skilleditor',routes.skilleditor);
router.post('/',routes.post.skilleditor);


module.exports = router;
