var schedule = require('node-schedule');
var callfile = require('child_process');
var path = require('path')

function scheduleCronstyle(){
    schedule.scheduleJob('0 40 15 * * *', function(){
        console.log('start fake ... \n scheduleCronstyle:' + new Date());
        console.log("sh" + " " + __dirname + '/fake-commit.sh');
        callfile.execFile(__dirname + '/fake-commit.sh', function (err, stdout, stderr) {
        	if (err !== null) { console.log("auto commit is successful !"); }
	});
    }); 
}

scheduleCronstyle();
