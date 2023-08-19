import jwt from "jsonwebtoken";
import * as userRepository from "../data/auth.js";

const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader.startsWith("Bearer "))) {
    res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(
    token,
    '9:3bz7^jK@@;SciNN%S8BgC,E"663U`!rG2',
    async (error, decoded) => {
      if (error) {
        res.status(401).json(AUTH_ERROR);
      }

      const user = await userRepository.findById(decoded.id);
      if (!user) {
        res.status(401).json(AUTH_ERROR);
      }

      req.userId = user.id;
      next();
    }
  );
};
