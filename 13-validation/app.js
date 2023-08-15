import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { body, param, validationResult } from "express-validator";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

const validate = (req, res, next) => {
  const error = validateResult(req);
  if (error.isEmpty()) {
    return next();
  }

  return res.status(400).json({ message: error.array() });
};

app.post(
  "/users",
  [
    body("name").trim().isLength({ min: 2 }).withMessage("두글자 이상"),
    body("age").isInt().withMessage("숫자만 가능"),
    body("email").isEmail().withMessage("이메일만 가능").normalizeEmail(),
    body("world.one").isInt().withMessage("숫자만"),
    validate,
  ],
  (req, res, next) => {
    res.sendStatus(200);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("파라미터 이메일만!"), validate],
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error.array() });
    }
    res.send("hello");
  }
);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
