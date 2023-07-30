const logger = require("./logger.js");
const emitter = new logger.Logger();

emitter.on("log", (event) => {
  console.log(444, event);
});
emitter.log(() => {
  console.log("hello");
});
