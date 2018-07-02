var express = require('express');
var router = express.Router();

var routes = {
        main:require('./main'),
        skill:require('./skill'),
        skilledit: require('./skill-editor'),
        post:require('./post')
        }
router.get('/',routes.main);
router.get('/skill',routes.skill);
router.get('/skill/edit',routes.skilledit);
router.post('/skill/edit',routes.post.skilledit);



module.exports = router;
