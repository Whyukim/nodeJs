const fs = require("fs");

// 👍
const data = [];

// 수정후
fs.createReadStream("./file.txt", {
  highWaterMark: 64, // 스트리밍이 한번에 처리할수 있는 값(기본값: 64kbytes)
  encoding: "utf-8",
})
  .on("data", (chunk) => {
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });

// 수정전
// const readStream = fs.createReadStream("./file.txt", {
//   highWaterMark: 64, // 스트리밍이 한번에 처리할수 있는 값(기본값: 64kbytes)
//   encoding: "utf-8",
// });

// readStream.on("data", (chunk) => {
//   data.push(chunk);
//   console.count("data");
// });

// readStream.on("end", () => {
//   console.log(data.join(""));
// });

// readStream.on("error", (error) => {
//   console.log(error);
// });
