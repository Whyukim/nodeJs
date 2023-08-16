import express from "express";
import "express-async-errors";
import { body } from "express-validator";

import * as authController from "../controller/auth.js";
import { validate } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

const validateLogin = [
  body("username").trim().notEmpty().withMessage("5글자 이상"),
  body("password").trim().isLength().withMessage("5글자 이상"),
  validate,
];

const validateSignup = [
  ...validateLogin,
  body("name").notEmpty().withMessage("5글자 이상"),
  body("email").isEmail().normalizeEmail().withMessage("invalid email"),
  body("url")
    .isURL()
    .withMessage("invalid url")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

// POST /login
router.post("/login", validateLogin, authController.login);

// POST /signin
router.post("/signup", validateSignup, authController.signup);

// GET /me
router.get("/me", isAuth, authController.me);

export default router;
