var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var gpio = require('pi-gpio');
server.listen(3000);
app.use('/', express.static(__dirname + '/client'));

var pins = [7, 11, 15];

io.on('connection', function (client) {
     console.log('connected');
     client.on('TurnOn', function(pin) {
          TurnOn(pin);
     });

     client.on('TurnOff', function(pin) {
          TurnOff(pin);
     });

     client.on('disconnect', function() {
          pins.forEach(function(e){
               TurnOff(e);
          })
     });

     function TurnOn(pin) {
          console.log(pin + " 1");
          gpio.open(pin, "output", function(err) {
               gpio.write(pin, 1, function(){});
          });
     }

     function TurnOff(pin) {
          console.log(pin + " 0");
          gpio.open(pin, "output", function(err) {
               gpio.write(pin, 0, function() {
                    gpio.close(pin);
               });
          });
     }
});
