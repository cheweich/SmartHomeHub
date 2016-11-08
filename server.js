var fs = require("fs");
var http = require("http");
var sonyApi = require("./sony/sony-tv-api");
var IRCC_CODE = require("./sony/ircc-code");
var C = require("./config");

var server = http.createServer(function(request, response) {
	console.log(new Date() + ": a " + request.method + " request comming in");

	var successCallback = function(res, body) {
		response.end('Status: ' + res.statusCode + ', ' + body);
	};
	var errorCallback = function(error, res) {
		response.end('communication error ' + error);
	};

	if (request.method == 'POST') {
		request.on('data', function(data) {
            console.log(new Date() + ": Receive a POST with body: " + data);
			sonyApi.call(IRCC_CODE[data], successCallback, errorCallback);
        });
	}
	else {
		sonyApi.call(IRCC_CODE.PowerOn, successCallback, errorCallback);
	}
	

});

server.listen(C.PORT, C.HOST_IP, function() {
	console.log("HTTP server runing at " + C.HOST_IP + ':' + C.PORT);
});