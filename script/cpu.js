var cp = require('child_process');
var schedule = require('node-schedule');


schedule.scheduleJob('*/1 * * * * *',function(){

cp.exec('sed -n "1p" /proc/stat;sleep 1;sed -n "1p" /proc/stat',function(err,data,stderr){
  if (err) {console.log(err);}

  if (stderr) {console.log(stderr)};

  if (data) {
	let time = data.split(/\n/);
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

	let rate = Number(((1-(idle_time2-idle_time1)/(total_time2-total_time1))*100).toFixed(1))

	console.log('CPU%:\t'+rate+'%')
  };
});
});

