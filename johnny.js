
var five = require("johnny-five"),
board = new five.Board();


board.on("ready", function() {
  var led = new five.Led(13);
  led.strobe();
  var pin = new five.Pin("A0");
  pin.read(function(error, value) {
    console.log(value)
    // pubnub.publish({
    //   channel: channel,
    //   message: value,
    // });
  });

});
