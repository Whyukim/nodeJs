import * as authRepository from "../data/auth.js";

export async function getMe(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? authRepository.getAllByUsername(username)
    : authRepository.getAll());

  res.status(200).json(data);
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const auth = await authRepository.login(username, password);

  if (auth) {
    res.status(200).json({
      token: new Date(),
      username: auth.username,
    });
  } else {
    res.status(404).json({ message: `user id(${id}) not found` });
  }
}

export async function create(req, res, next) {
  const { username, password, name, email, url } = req.body;
  const auth = await authRepository.create(
    username,
    password,
    name,
    email,
    url
  );

  if (auth) {
    res.status(200).json({
      token: new Date(),
      username: auth.username,
    });
  } else {
    res.status(404).json({ message: `user id(${id}) not create` });
  }
}
