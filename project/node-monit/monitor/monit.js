var schedule = require('node-schedule');
var cp = require('child_process');

var req = require('./modules/req.js');
var sys = require('./modules/sys.js');
var config = require('./config/config.js');


//ssh connect
for ( key in ip ) {
  var ssh = cp.execSync('sh ./sshkey.sh '+user+' '+ip[key]+' '+passwd,function(err,stdout,stderr){
	if (err) { console.log(err);}
	if (stderr) {console.log(stderr);}
  });
};

//web request test
for ( key in web ) {
	req(web[key]);
};

//server data acquisition
for ( key in ip ) {
	sys(user,ip[key]);
};




