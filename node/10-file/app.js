// file 변경
const fs = require("fs");

// try { renameSync(....) } catch(e) { } - 동기 > 에러 발생 시 시스템 다운(사용 x)
// rename(...., callback(error, data)) - 비동기
// promise.rename().then().catch(0) - 비동기

// try {
//   fs.renameSync("./text.txt", "./text-new.txt");
// } catch (error) {
//   console.log(error);
// }
// console.log("hello");
// // 동기 => error 출력 후 hello 출력

// fs.rename("./text.txt", "./text-new.txt", (error) => {
//   console.log(error);
// });
// console.log("hello");
// // 비동기 => hello 출력 후 error 출력

fs.promises
  .rename("./text.txt", "./text-new.txt") //
  .then()
  .catch(console.log); // catch(error => console.log(error)) -> 전달받는 인자와 호출하는 인자가 동일한 경우, 그냥 함수의 참조값만 (함수의 이름만) 전달 가능
console.log("hello");
// 비동기 => hello 출력 후 error 출력
