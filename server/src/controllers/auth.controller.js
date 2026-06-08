import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { loginSchema } from "../validators/auth.schema.js";
import { getDemoUserPublic, validateDemoLogin } from "../services/mockStudent.service.js";

function setAuthCookie(res, user) {
  const token = jwt.sign(
    {
      id: user.id,
      studentId: user.studentId,
      email: user.email,
      name: user.name
    },
    env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  res.cookie(env.COOKIE_NAME, token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 8 * 60 * 60 * 1000
  });
}

export function login(req, res) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, message: parsed.error.issues[0].message });
  }

  const user = validateDemoLogin(parsed.data.studentId, parsed.data.password);
  if (!user) {
    return res.status(401).json({ ok: false, message: "Invalid student ID or password" });
  }

  setAuthCookie(res, user);
  res.json({ ok: true, user });
}

export function me(req, res) {
  const token = req.cookies?.[env.COOKIE_NAME];
  if (!token) return res.status(401).json({ ok: false, message: "No active session" });

  try {
    const payload = jwt.verify(token, env.JWT_SECRET);
    const user = getDemoUserPublic();
    if (payload.studentId !== user.studentId) return res.status(401).json({ ok: false, message: "Invalid session" });
    return res.json({ ok: true, user });
  } catch (_err) {
    return res.status(401).json({ ok: false, message: "Invalid session" });
  }
}

export function logout(_req, res) {
  res.clearCookie(env.COOKIE_NAME, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "production" ? "none" : "lax"
  });
  res.json({ ok: true, message: "Logged out" });
}
