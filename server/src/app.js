import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

function isAllowedOrigin(origin) {
  return !origin || env.CLIENT_ORIGINS.includes(origin);
}

function applyCorsHeaders(req, res, next) {
  const origin = req.headers.origin;
  if (isAllowedOrigin(origin)) {
    if (origin) res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With");
    res.setHeader("Vary", "Origin");
  }

  if (req.method === "OPTIONS") return res.sendStatus(204);
  return next();
}

app.use(applyCorsHeaders);
app.use(helmet({ crossOriginResourcePolicy: false }));
const corsOptions = {
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "iron-student-portal-api", message: "API is running. Use /api/health." });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "iron-student-portal-api", mode: env.NODE_ENV, allowedOrigins: env.CLIENT_ORIGINS });
});

app.get("/api/debug/routes", (_req, res) => {
  res.json({
    ok: true,
    version: "cors-routes-fixed-2026-06-08",
    routes: [
      "GET /api/health",
      "POST /api/auth/login",
      "GET /api/auth/me",
      "POST /api/auth/logout",
      "GET /api/student/summary",
      "GET /api/student/profile",
      "GET /api/student/course-history",
      "GET /api/student/results",
      "GET /api/student/class-routine",
      "GET /api/student/exam-routine",
      "GET /api/student/billing",
      "GET /api/student/pre-advising",
      "GET /api/student/transport-routes",
      "GET /api/student/notices",
      "GET /api/student/settings",
      "PUT /api/student/settings"
    ]
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
