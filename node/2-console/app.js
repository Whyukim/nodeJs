console.log("loaind...");
console.clear();

// log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert - false 일때만 출력
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

// print object
const student = { name: "hello", age: 20, company: { name: "world" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, color: false, depth: 2 });
console.dir(student, { showHidden: true, color: false, depth: 0 });

// measuring time
console.time("for loop");
for (let i = 0; i < 100; i++) {
  i++;
}
console.timeEnd("for loop");
// ---> for loop 처럼 time 안 문자열(레이블)이 같아야함

//counting
function a() {
  console.count("a funciton");
}
a();
a();
console.countReset("a funciton");
a();

// trace
function f1() {
  b();
}
function b() {
  c();
}
function c() {
  console.log("helo");
  console.trace();
}

f1();
