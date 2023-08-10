import express from "express";
import "express-async-errors";

const router = express.Router();

let tweets = [
  {
    id: "1",
    text: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "hello",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "World",
    username: "world",
  },
];

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;

  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `tweet id(${id}) not found` });
  }
});

router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: new Date().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;
  const tweet = tweets.find((tweet) => tweet.id === id);

  if (tweet) {
    tweet.text = text;
    res.status(200).send(tweet);
  } else {
    res.status(404).json({ message: `tweet id(${id}) not found` });
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
