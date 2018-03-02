var fs = require('fs');
var schedule = require('node-schedule');

schedule.scheduleJob('*/1 * * * * *',function() {
  fs.readFile('/proc/meminfo','UTF-8',function(err,data){
	if (err) {console.log(err);}
	if (data) {
  	   let total = parseInt(data.split(/\n/)[0].split(/[\s]+/)[1]/1024+0.5);
  	   let used = total-parseInt(data.split(/\n/)[2].split(/[\s]+/)[1]/1024+0.5);
  	   let usage = Number((used/total*100).toFixed(1));

	   console.log('MEM%:\t'+usage+'%\nMEM(M):\t'+used+'/'+total);

        };
  });
});
