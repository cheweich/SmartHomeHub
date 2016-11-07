var fs = require("fs");
var http = require("http");
var sonyApi = require("./sony/sony-tv-api");
var IRCC_CODE = require("./sony/ircc-code");
var C = require("./config");

var server = http.createServer(function(request, response) {
	console.log(new Date() + ": request comming in");

	sonyApi.call(
		IRCC_CODE.VolumeDown, 
		function(res, body) {
			response.end('Status: ' + res.statusCode + ', ' + body);
		},
		function(error, res) {
			response.end('communication error ' + error);
		}
	);

});

server.listen(C.PORT, C.HOST_IP, function() {
	console.log("HTTP server runing at " + C.HOST_IP + ':' + C.PORT);
});