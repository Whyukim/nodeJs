import express from "express";
import "express-async-errors";
import { body } from "express-validator";

import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateTweet = [
  body("text").trim().isLength({ min: 2 }).withMessage("2글자 이상"),
  validate,
];

// GET /tweets
// GET /tweets?username=:username
router.get("/", tweetController.getTweets);

// GET /tweets/:id
router.get("/:id", tweetController.getTweet);

// POST /tweets
router.post("/", validateTweet, tweetController.createTweet);

// PUT /tweets/:id
router.put("/:id", validateTweet, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", tweetController.deleteTweet);

export default router;
