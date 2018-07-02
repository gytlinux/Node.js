var express = require('express');
var router = express.Router();

var routes = {
        home:require('./home'),
        test:require('./test'),
        testpost:require('./testpost')
    }
 
router.get('/',routes.home);
router.get('/test',routes.test);
router.post('/test',routes.testpost);


module.exports = router;
