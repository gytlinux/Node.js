var express = require('express'),
    bodyParser = require('body-parser'),
    //session = require('express-session'),
    //cookieParser = require('cookie-parser'),
    swig = require('swig'),
    logger = require('morgan'),
    path = require('path');

require('dotenv').config();
var app = express();
var route = require('./routes/index');
var port = process.env.PORT || 3000;
var ip = process.env.IP || '127.0.0.1';

app.engine("html",swig.renderFile);
app.set("views","./views");
app.set("view engine","html");
swig.setDefaults({cache : false});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

/*app.use(session({  
    secret:'keyboard cat',  
    resave:false,  
    saveUninitialized:true,  
    cookie:{ secure:false}
}));*/

app.listen(port,ip,function(){
  console.log('Server is running on '+ip+':'+port);
  });

route(app);
