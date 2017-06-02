var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var gpio = require('pi-gpio');
server.listen(3000);     // THE SERVER PORT
app.use('/', express.static(__dirname + '/client'));

var pins = [7, 11, 15]; // PUT YOUR LEDs PINS HERE

io.on('connection', function (client) {

     // WHEN THE CLIENT EMIT "TurnOn"
     client.on('TurnOn', function(pin) {
          TurnOn(pin);
     });

     // WHEN THE CLIENT EMIT "TurnOff"
     client.on('TurnOff', function(pin) {
          TurnOff(pin);
     });

     // WHEN A CLIENT DISCONNECT
     client.on('disconnect', function() {
          pins.forEach(function(e){
               TurnOff(e);
          })
     });

     // TO TURN OFF A LED (pin -> pin were your led is plugged)
     function TurnOn(pin) {
          console.log(pin + " 1");
          gpio.open(pin, "output", function(err) {
               gpio.write(pin, 1, function(){});
          });
     }

     // TO TURN OFF A LED (pin -> pin were your led is plugged)
     function TurnOff(pin) {
          console.log(pin + " 0");
          gpio.open(pin, "output", function(err) {
               gpio.write(pin, 0, function() {
                    gpio.close(pin);
               });
          });
     }
});
