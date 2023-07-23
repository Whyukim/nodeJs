const fs = require("fs").promises;

// read file
fs.readFile("./text.txt", "utf8") //
  .then(console.log)
  .catch(console.error);

// write file
fs.writeFile("./text.txt", "hello world").catch(console.error);

// 파일 내용 추가
fs.appendFile("./text.txt", "파일 내용 뒤에 내용 붙이기").catch(console.error);

// 파일 카피
fs.copyFile("./text.txt", "./text2.txt").catch(console.error);

// 폴더 추가
fs.mkdir("./text").catch(console.error);

// 현재 경로의 모든 파일/폴더 읽어오기
fs.readdir("./").then(console.log).catch(console.error);
