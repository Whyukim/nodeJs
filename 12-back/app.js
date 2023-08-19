import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.js";

const app = express();

// const corsOptions = {
//   origin: ["http://127.0.0.1:5500"],
//   optionsSuccessStatus: 200,
//   credentials: true,
// };

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/tweets", tweetsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  console.log(res);
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
