var EventEmitter = require('events');

//module.exports = Timer;

function Timer () {
  EventEmitter.call(this);

  var self = this;
  setInterval(function () {
    self.emit('tick');
    }, 1000);
}

Timer.prototype = new Object(EventEmitter.prototype, {
  constructor: {
    value: EventEmitter,
  }
});

var basicTimer = new Timer();
basicTimer.addListener('tick', function (event) {
  process.stdout.write('tick \n');
});



