var request = require("request");
var C = require("../config");

var api = {
	/**
	 * @param {string}
	 * @param {function}
	 * @param {function}
	 */
	call: function(irccCode, successCallback, errorCallback) {
		request({
	        url: 'http://' + C.SONY_TV.IP + '/sony/ircc', //URL to hit
	        //qs: {from: 'blog example', time: +new Date()}, //Query string data
	        method: 'POST', 
	        headers: {
	        	'X-Auth-PSK': C.SONY_TV.PRESHARED_KEY,
	        	'Content-Type': 'text/xml; charset=utf-8',
	        	'soapaction': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"'
	        },
	        body : '<?xml version="1.0"?>' +
	              '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
	              '<s:Body>' +
	              '<u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">' +
	              '<IRCCCode>' + irccCode + '</IRCCCode>' +
	              '</u:X_SendIRCC>' +
	              '</s:Body>' +
	              '</s:Envelope>'
	    }, function(error, response, body) {
	        if (!error && response.statusCode === 200) {
	        	successCallback(response, body);
	        } 
	        else {
	        	errorCallback(error, response);
	        }
	    });
	}
};

module.exports = api;
