var request = require('request');
var email = require('./email.js')
var schedule = require('node-schedule');
var fs =require('fs');

function req(url) {
  var x = 0
  schedule.scheduleJob(crontab,function(){
    request.head('http://'+url,function(err,data){
	if (err) {
          x = x+1
	  fs.appendFile('./modules/warning.log',Date()+'\n'+err+'\n', (err) => {
                if (err) throw err;
        });

      	  if ( x == 6 ) {
            console.log(err);	

	    email('ERROR!',
		'<pre>'+Date()+
		'\nWeb:\t'+url+
		'\n'+err+'</pre>');
		
          } else if ( x > 10 ) {
	    x = x-1 ;
          };	
      	};
  	if (data) {

      	  let code = data.statusCode
      	  console.log(code)

      	  if ( code >= 500 ) {
            x = x+1
	    fs.appendFile('./modules/warning.log',Date()+url+':'+code+'\n',(err)=>{
               		 if (err) throw err;
            });

	    if ( x == 6 ) {
	      console.log(x)
	      email('Web Warning!',
		  '<pre>'+Date()+
		  '\nWeb: '+url+
		  '\nStatus: '+code+' Web cannot access!</pre>');
            } else if ( x > 10 ) {
	      x = x-1;
	    }  
      	  } else {
	    x = 0
          }; 
  	};
    });
  });
};
module.exports = req;
