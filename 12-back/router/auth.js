import express from "express";
import "express-async-errors";
import { body } from "express-validator";

import * as authController from "../controller/auth.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateTweet = [
  body("text").trim().isLength({ min: 2 }).withMessage("2글자 이상"),
  validate,
];

// GET /me
router.get("/me", authController.getMe);

// POST /login
router.post("/login", authController.login);

// POST /signin
router.post("/signup", authController.create);

export default router;
