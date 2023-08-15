const jwt = require("jsonwebtoken");

const secret = '9:3bz7^jK@@;SciNN%S8BgC,E"663U`!rG2';
const token = jwt.sign(
  {
    id: "hello",
    isAdmin: true,
  },
  secret,
  {
    expiresIn: 2,
  }
);

jwt.verify(token, secret, (err, decoded) => {
  console.log(err, decoded);
});

setTimeout(() => {
  jwt.verify(token, secret, (err, decoded) => {
    console.log(err, decoded);
  });
}, 3000);

console.log(token);
