var express = require('express');
var router = express.Router();

var skill = {
        main: require('./main'),
        article: require('./article')
    }

router.get('/',skill.main);
router.get('/article',skill.article);



module.exports = router;
