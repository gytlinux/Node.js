# node-schedule modules

### Install

```
npm install node-schedule [ -g | --save ] 
```

### 时间数值表

```

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ [dayOfWeek]day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── [month]month (1 - 12)
│    │    │    └────────── [date]day of month (1 - 31)
│    │    └─────────────── [hour]hour (0 - 23)
│    └──────────────────── [minute]minute (0 - 59)
└───────────────────────── [second]second (0 - 59, OPTIONAL)

```


### Use

```
var schedule = require('node-schedule');

var j = schedule.scheduleJob('42 * * * *', function(){
	console.log('xxx');
}); 

```


