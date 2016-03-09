var Cylon = require('cylon');

var config = __dirname + "/snes.json"

Cylon.robot({
  connections: {
    joystick: { adaptor: 'joystick' }
  },

  devices: {
    controller: { driver: "joystick", config: config }
  },

  work: function(my) {
    ["y", "b", "x", "a", "l", "r", "select", "start"].forEach(function(button) {
      my.controller.on(button + ":press", function() {
        console.log("Button " + button + " pressed.");
      });

      my.controller.on(button + ":release", function() {
        console.log("Button " + button + " released.");
      });
    });

    my.controller.on("x:move", function(pos) {
      console.log("X axis:", Math.round(pos));
    });

    my.controller.on("y:move", function(pos) {
      console.log("Y axis:", Math.round(pos));
    });
  }
}).start();
