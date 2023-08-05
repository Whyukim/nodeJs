import express from "express";
const app = express();
app.use('/api', (req, res, next) => {
    console.log('all');
})
app.all('/api', (req, res, next) => {
    console.log('all');
})

app.get(
  "/",
  (req, res, next) => {
    console.log('first');
  },
  (req, res, next) => {
    console.log("first2");
  }
);

app.get('/', (res, req, next) => {
    console.log('second');
})
app.listen(8080);
