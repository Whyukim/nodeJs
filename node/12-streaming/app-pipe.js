// 파일과 파일을 연결해줌
const fs = require("fs");
const zlib = require("zlib"); // 압축 모듈

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip(); // 압축파일로 변환
const writeStream = fs.createWriteStream("./file4.txt");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});

const http = require("http");
const { setServers } = require("dns");
const server = http.createServer((req, res) => {
  // 💩 -> 파일을 한번에 불러오지말고
  fs.readFile("file.txt", (err, data) => {
    res.end(data);
  });
  // 👍 -> stream으로 불러와랏
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
