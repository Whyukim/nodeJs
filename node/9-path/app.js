//  경로 모듈
const path = require("path");

/* 
    운영체제 별 경로 값
    POSIX(Unix: Mac, Linux): 'Users/temp/myfile.html'
    window: 'C:\\temp\\myfile.html'
*/
console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경 변수 구분자

// basename
console.log(path.basename(__filename)); // 파일 이름
console.log(path.basename(__filename, ".js")); // 파일이름에서 .js 제거

// directory
console.log(path.dirname(__filename));

// 확장자
console.log(path.extname(__filename));

// parse -> 파일 확장자 등을 객체로 보여줌
const parse = path.parse(__filename);
console.log(parse);

// 객체를 문자열로
const str = path.format(parse);
console.log(str);

// isAbsolute -> 절대 결로라면 true 아니라면 false
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("../"));

// normalize -> 잘못된 경로를 수정해줌
console.log(path.normalize("hello/////////world"));

// join
console.log(__dirname + "/" + "hello"); // 잘못됨(x) - window에서 경로가 이상하게 표기될거임
console.log(path.join(__dirname, "hello")); // 잘된표기(o)
