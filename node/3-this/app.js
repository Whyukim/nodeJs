function hello() {
  console.log(this);
  console.log(this === global);
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }

  world() {
    console.log(this);
    console.log(this === global);
  }
}
const a = new A(1);
a.world();

console.log(this);
console.log(this === module.exports);
