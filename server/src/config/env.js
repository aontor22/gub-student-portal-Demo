import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 5000),
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  CLIENT_ORIGINS: (process.env.CLIENT_ORIGINS || process.env.CLIENT_ORIGIN || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  JWT_SECRET: process.env.JWT_SECRET || "development_secret_change_me",
  COOKIE_NAME: process.env.COOKIE_NAME || "iron_portal_session",
  EXTERNAL_PORTAL_ENABLED: process.env.EXTERNAL_PORTAL_ENABLED === "true",
  AUTHORIZED_PORTAL_BASE_URL: process.env.AUTHORIZED_PORTAL_BASE_URL || "",
  AUTHORIZED_PORTAL_TOKEN: process.env.AUTHORIZED_PORTAL_TOKEN || ""
};
