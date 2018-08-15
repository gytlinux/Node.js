var cp = require('child_process');
var schedule = require('node-schedule');
var email = require('./email.js');
var fs =require('fs');

function sys(user,ip) {

  var x = 0 
  var y = 0
  let cmd = '"sed -n "1p" /proc/stat;sleep 1;sed -n "1p" /proc/stat;sed -n "1,3p" /proc/meminfo;cat /proc/loadavg"'

  schedule.scheduleJob(crontab,function(){
    cp.exec('ssh '+user+'@'+ip+' '+cmd,function(err,data,stderr){
	if (err) { 
	    console.log(err);
	} else if (stderr) { 
	    console.log(stderr);
	} else if (data) {
            let cpu_total1 = parseInt(data.split(/\n/)[0].split(/[\s]+/)[1])+
		      	     parseInt(data.split(/\n/)[0].split(/[\s]+/)[2])+
			     parseInt(data.split(/\n/)[0].split(/[\s]+/)[3])+
			     parseInt(data.split(/\n/)[0].split(/[\s]+/)[4])+
			     parseInt(data.split(/\n/)[0].split(/[\s]+/)[5])+
			     parseInt(data.split(/\n/)[0].split(/[\s]+/)[6])+
			     parseInt(data.split(/\n/)[0].split(/[\s]+/)[7])

	    let cpu_idle1 = parseInt(data.split(/\n/)[0].split(/[\s]+/)[4])

            let cpu_total2 = parseInt(data.split(/\n/)[1].split(/[\s]+/)[1])+
		      	     parseInt(data.split(/\n/)[1].split(/[\s]+/)[2])+
			     parseInt(data.split(/\n/)[1].split(/[\s]+/)[3])+
			     parseInt(data.split(/\n/)[1].split(/[\s]+/)[4])+
			     parseInt(data.split(/\n/)[1].split(/[\s]+/)[5])+
			     parseInt(data.split(/\n/)[1].split(/[\s]+/)[6])+
			     parseInt(data.split(/\n/)[1].split(/[\s]+/)[7])
		
	    let cpu_idle2 = parseInt(data.split(/\n/)[1].split(/[\s]+/)[4])

	    let cpurate = Number(((1-(cpu_idle2-cpu_idle1)/(cpu_total2-cpu_total1))*100).toFixed(1))

            let mtotal = parseInt(data.split(/\n/)[2].split(/[\s]+/)[1]/1024+0.5)
            let mused = parseInt(mtotal-data.split(/\n/)[4].split(/[\s]+/)[1]/1024+0.5)
            let musage = Number((mused/mtotal*100).toFixed(1))

            let loadavg = data.split(/\n/)[5]

            let emailbody = Date()+
			    '\nServer status:'+
              		    '\n\tServer:\t\t'+ip+
                	    '\n\tCPU%:\t\t'+cpurate+'%'+
               		    '\n\tLoadavg:\t'+loadavg+
             	   	    '\n\tMEM%:\t\t'+musage+'%'+
              		    '\n\tMEM(M):\t\t'+mused+'M/'+mtotal+'M'

	    if ( cpurate > 85 ) {
		x = x+1
		fs.appendFile('./modules/warning.log','MEM Warning!\n'+emailbody+'\n',(err) => { if (err) throw err;});
	    	if ( x == 6 ) {
		  email('CPU Fatal Warning!',
			'<pre>CPU Busy!\n\n'+
			emailbody+'</pre>');
	        } else if ( x > 10 ) {
		  x = x-1;
		}
	    } else {
		x = 0 
	    };
	    if ( musage > 85 ) {
		y = y+1 
		fs.appendFile('./modules/warning.log','MEM Warning!\n'+emailbody+'\n',(err) => { if (err) throw err;});
                if ( y == 6 ) {	
		  email('MEM Fatal Warning!',
			'<pre>Memory usage more!\n\n'+
			emailbody+'</pre>');
		} else if ( y > 10 ){
		  y = y-1
		}
	    } else {
		y = 0
	    };
	    console.log(emailbody);
	};
    });
  });
};
module.exports = sys;



