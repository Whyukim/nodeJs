import express from "express";
import "express-async-errors";
import fs from "fs";

const app = express();

app.get("/file", async function (req, res) {
  const data = await fs.readFile("/file.txt");
  return res.send(data);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "wrong" });
});

app.listen(8080);
