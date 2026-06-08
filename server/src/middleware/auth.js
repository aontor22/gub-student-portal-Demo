import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function requireAuth(req, _res, next) {
  const token = req.cookies?.[env.COOKIE_NAME];
  if (!token) {
    const error = new Error("Authentication required");
    error.statusCode = 401;
    return next(error);
  }

  try {
    req.user = jwt.verify(token, env.JWT_SECRET);
    return next();
  } catch (_err) {
    const error = new Error("Invalid or expired session");
    error.statusCode = 401;
    return next(error);
  }
}
