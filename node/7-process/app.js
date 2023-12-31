const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

// task queue에 가장 빠르게 실행시켜준다
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
