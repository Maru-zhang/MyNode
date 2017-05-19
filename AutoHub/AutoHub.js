var schedule = require('node-schedule');

function scheduleCronstyle(){
    schedule.scheduleJob('0 0 11 * * *', function(){
        console.log('scheduleCronstyle:' + new Date());
    }); 
}

scheduleCronstyle();