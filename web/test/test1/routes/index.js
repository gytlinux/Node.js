var express = require('express');
var router = express.Router();

router.use('/',require('./admin'));
//router.use('/admin',require('./admin'));

module.exports = router;
