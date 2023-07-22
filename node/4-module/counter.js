let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.increase = increase;
console.log(module.exports === exports);
module.exports.getCount = getCount;
exports = {};
console.log(module.exports === exports);
console.log(module);
