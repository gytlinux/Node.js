var os = require('os');
var util = require('util');
var schedule = require('node-schedule');
var cp = require('child_process');
var config = require('./config/config.js');
var email = require('./modules/email.js')
var fs = require('fs');

x = 0
y = 0

schedule.scheduleJob(crontab,function() {

  cp.exec('sed -n "1p" /proc/stat;sleep 1;sed -n "1p" /proc/stat;sed -n "1p;3p" /proc/meminfo',function(err,stdout,stderr){
	if (err) { console.log(err);}
	if (stderr) { console.log(stderr);}
	if (stdout) {
	  let time = stdout.split(/\n/);
  	  let total_time1 = parseInt(time[0].split(/[\s]+/)[1])+
         	            parseInt(time[0].split(/[\s]+/)[2])+
                	    parseInt(time[0].split(/[\s]+/)[3])+
                   	    parseInt(time[0].split(/[\s]+/)[4])+
           	            parseInt(time[0].split(/[\s]+/)[5])+
                 	    parseInt(time[0].split(/[\s]+/)[6])+
              		    parseInt(time[0].split(/[\s]+/)[7])

  	  let idle_time1 = parseInt(time[0].split(/[\s]+/)[4])

 	  let total_time2 = parseInt(time[1].split(/[\s]+/)[1])+
          	            parseInt(time[1].split(/[\s]+/)[2])+
                 	    parseInt(time[1].split(/[\s]+/)[3])+
               	 	    parseInt(time[1].split(/[\s]+/)[4])+
                    	    parseInt(time[1].split(/[\s]+/)[5])+
               		    parseInt(time[1].split(/[\s]+/)[6])+
          	            parseInt(time[1].split(/[\s]+/)[7])

	  let idle_time2 = parseInt(time[1].split(/[\s]+/)[4])

  	  let rate = Number(((1-(idle_time2-idle_time1)/(total_time2-total_time1))*100).toFixed(1));

	  let mtotal = parseInt(time[2].split(/[\s]+/)[1]/1024+0.5)
	  let mused = mtotal - parseInt(time[3].split(/[\s]+/)[1]/1024+0.5)
	  let musage = Number((mused/mtotal*100).toFixed(1))

	  let system ='Date:\t'+Date()+'\n'+
                      'Server:\t'+os.hostname()+'\n'+
            	      'System:\t'+os.type()+'\t'+os.release()+'\n\n'+
           	      'CPU%:\t'+rate+'%\n'+
              	      'Loadavg:\t'+os.loadavg()+'\n'+
                      'CPU info:\t\n'+util.inspect(os.cpus()[0])+'\n\n'+
                      'MEM%:\t'+musage+'%\n'+
                      'MEM(M):\t'+mused+'M/'+mtotal+'M\n\n'+
                      'Network:\t\n'+util.inspect(os.networkInterfaces())

	  if ( rate > 85 ) {
                x = x+1
		fs.appendFile('./modules/warning.log','MEM Warning!\n'+system+'\n',(err) => { if (err) throw err;});
                if ( x == 6 ) {
                  email('CPU Fatal Warning!',
                        '<pre>CPU Busy!\n\n'+
                        system+'</pre>');
                } else if ( x > 10 ) {
                  x = x-1;
                }
            } else {
                x = 0
            };
            if ( musage > 85 ) {
                y = y+1
		fs.appendFile('./modules/warning.log','MEM Warning!\n'+system+'\n',(err) => { if (err) throw err;});
                if ( y == 6 ) {
                  email('MEM Fatal Warning!',
                        '<pre>Memory usage more!\n\n'+
                        system+'</pre>');
                } else if ( y > 10 ){
                  y = y-1
                }
            } else {
                y = 0
            };

	   console.log(Date()+
		       '\nCPU%:\t'+rate+'%'+
		       '\nload:\t'+os.loadavg()+
		       '\nMEM%:\t'+musage+'%'+
		       '\nMEM :\t'+mused+'M/'+mtotal+'M\n')
	}


  });
});
