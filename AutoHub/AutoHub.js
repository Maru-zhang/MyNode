var schedule = require('node-schedule');
var callfile = require('child_process');
var path = require('path')

function scheduleCronstyle(){
    schedule.scheduleJob('1 * * * * *', function(){
        console.log('start fake ... \n scheduleCronstyle:' + new Date());
        console.log("sh" + " " + __dirname + '/fake-commit.sh');
        callfile.execFile(__dirname + '/fake-commit.sh', function (err, stdout, stderr) {
        	console.log(err);
		});
    }); 
}

scheduleCronstyle();