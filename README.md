# NodeJS-Pi-LED
Remote your LEDs (plugged in gpios -> 7, 11, 15 AND ground -> 39) by a web interface using NodeJS (socket.io, express, pi-gpio)

commands:
```
$ sudo apt-get install git nodejs npm make

$ git clone https://github.com/quick2wire/quick2wire-gpio-admin.git
$ cd quick2wire-gpio-admin
$ sudo nano src/gpio-admin.c
At the line 30 replace "/sys/devices/virtual/gpio/gpio%u/%s" with "sys/class/gpio/gpio%u/%s". Save and quit
$ make
$ make install

$ git clone https://github.com/OwenGombas/NodeJS-Pi-LED.git
$ cd NodeJS-Pi-LED
$ npm install
$ sudo nano client/index.html
At the line 20 replace 'http://www.davenstudio.com:3000/' with your server IP address and port(3000). Save and quit
$ node server.js
Go on your browser and type: localhost:3000 to test or <YourServerIpAdress>:<Port>
```
