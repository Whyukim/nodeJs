const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = emitter.on("hello", (args) => {
  console.log("111 - ", args);
});

emitter.on("hello", (args) => {
  console.log("222 - ", args);
});

emitter.emit("hello", { id: "111" });
emitter.emit("hello", { id: "222" });
callback1.removeAllListeners();
emitter.emit("hello", { id: "333" });
