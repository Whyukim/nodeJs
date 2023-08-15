const bcrypt = require("bcrypt");

const password = "qwe123";
const hashed = bcrypt.hashSync(password, 12);
console.log(1, password, 2, hashed);

const result = bcrypt.compareSync("qwe123", hashed);
console.log(result);
