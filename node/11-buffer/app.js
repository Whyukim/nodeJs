// 버퍼란? 고정된 사이즈의 메모리 덩어리
// 데이터 있는 바트 그  자체

const buf = Buffer.from("Hi");
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // 빠르지만 이미 할당된 메모리를 사용할수있는 단점이있음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
