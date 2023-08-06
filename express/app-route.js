import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // body값 읽기 편함
app.use(express.urlencoded({ extended: false })); // html form을 자동으로 body안으로 넣어줌
app.use(express.static("public")); // 해당 public에 대한 모든 파일 접근가능

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);
