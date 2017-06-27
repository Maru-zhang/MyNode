var schedule = require('node-schedule');
var callfile = require('child_process');
var path = require('path')

function excuteTask() {
    callfile.execFile(__dirname + '/fake-commit.sh', function (err, stdout, stderr) {
    	if (err !== null) { console.log("auto commit is successful !"); }
	});
}

function scheduleCronstyle() {
    schedule.scheduleJob('0 0 20 * * *', function() {
        console.log('start fake ... \n scheduleCronstyle:' + new Date());
        console.log("sh" + " " + __dirname + '/fake-commit.sh');
        var count = 1;
        if (Math.ceil(Math.random() * 3) % 2 == 0) {
        	count++;
        }
        for (;count > 0; i--) {
        	excuteTask();
        }
    });
  }

scheduleCronstyle();