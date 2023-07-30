const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended...");
  }
}

// 잘못된 예시
// function log(callback) {
//   emitter.emit("log", "started...");
//   callback();
//   emitter.emit("log", "ended...");
// }

// module.exports.log = log;
module.exports.Logger = Logger;
