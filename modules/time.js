
var os = require('os');

function getUptime(){
	var uptime = os.uptime();
    var hour = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime % 3600) / 60);
    var seconds = Math.floor(uptime % 60);

console.log('Uptime: ' + hour + ' hours ' + minutes + ' min ' + seconds + ' sec.' );
}
exports.print = getUptime;