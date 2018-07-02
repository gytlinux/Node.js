var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var swig = require('swig');
var logger = require('morgan');
var path = require('path');
var app = express();

require('dotenv').config();

var port = process.env.PORT || 3000;
var ip = process.env.IP || '127.0.0.1';

app.engine("html",swig.renderFile);
app.set("views","./views");
app.set("view engine","html");
swig.setDefaults({cache : false});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use(require('./routes'));

app.listen(port,ip,function(){
  console.log('Server is running on '+ip+':'+port);
  });
