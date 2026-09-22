import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import pinoHttp from "pino-http";

import { env } from "./config/env.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";
import { apiRouter } from "./routes/index.js";
import { logger } from "./utils/logger.js";

export const app = express();

app.disable("x-powered-by");

app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(compression());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use(
  rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    limit: env.RATE_LIMIT_MAX,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);

app.use(pinoHttp({ logger }));

app.get("/", (_req, res) => {
  res.json({
    name: "CWAD Express TypeScript API",
    status: "running",
  });
});

app.use("/api/v1", apiRouter);

app.use(notFound);
app.use(errorHandler);