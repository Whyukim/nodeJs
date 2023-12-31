import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as userRepository from "../data/auth.js";

const jwtSecretKey = '9:3bz7^jK@@;SciNN%S8BgC,E"663U`!rG2';
const jwtExpiresInDays = "2d";
const bcryptSaltRound = 12;

export async function login(req, res, next) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

export async function signup(req, res, next) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);

  if (found) {
    res.status(409).json({ message: `${username} is have` });
  }

  const hashed = await bcrypt.hash(password, bcryptSaltRound);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}
