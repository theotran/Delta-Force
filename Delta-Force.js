var EventEmitter = require('events');


//module.exports = Timer;

function Timer () {
  EventEmitter.call(this);
  var intervalId = null;
  
}

Timer.prototype = new Object(EventEmitter.prototype, {
  constructor: {
    value: EventEmitter,
  }
});

Timer.prototype.start = function (tickCount) {
  var counter = 0;
  //self reps the instance of timer
  var self = this;
  tickCount = tickCount || 60;
  var startTime = Date.now();

  //emitting something called 'start', if youre going to emit something you have to have a listener
  self.emit('start', {startTime: startTime});
  this.intervalId = setInterval(function () {
    counter++;
    if (counter > tickCount) {
      self.stop();
    } else {
      self.emit('tick', {counter: counter});
    }
  }, 1000);
};

Timer.prototype.stop = function () {

  var self = this;
  var endTime = Date.now();
  self.emit('stop', {endTime: endTime});
  
  clearInterval(this.intervalId);

};

var basicTimer = new Timer();



function tickHandler (event) {
  console.log(event);
}

basicTimer.addListener('tick', tickHandler);

basicTimer.addListener('start', tickHandler);

basicTimer.addListener('stop', tickHandler);

basicTimer.start(10);





