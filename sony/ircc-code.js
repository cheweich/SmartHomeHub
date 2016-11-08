
// http://www.openremote.org/display/forums/Sony+TV+HTTP+control
// TODO: call sony/system with method getRemoteControllerInfo to get all valid ircc code
var IRCC_CODE = {
	PowerOn: "AAAAAQAAAAEAAAAVAw==",
	PowerOff: "AAAAAQAAAAEAAAAVAw==",

	VolumeUp: "AAAAAQAAAAEAAAASAw==",
	VolumeDown: "AAAAAQAAAAEAAAATAw==",
	Play: "AAAAAgAAAJcAAAAaAw==",
	Pause: "AAAAAgAAAJcAAAAZAw==",

	Netflix: "AAAAAgAAABoAAAB8Aw==",

	PS4: "AAAAAgAAABoAAABaAw==", // Hdmi1
	PC: "AAAAAgAAABoAAABbAw=="  // Hdmi2

};

module.exports = IRCC_CODE;