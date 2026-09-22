import { createServer } from "node:http";
import { handleRoutes } from "./routes/index.js";
import { logger } from "./utils/logger.js";

export function createApp() {
  return createServer(async (req, res) => {
    try {
      await handleRoutes(req, res);
    } catch (error) {
      logger.error(error);

      const statusCode = Number.isInteger(error?.statusCode)
        ? error.statusCode
        : 500;

      const payload = {
        success: false,
        error: {
          code: error?.code ?? "INTERNAL_SERVER_ERROR",
          message:
            statusCode === 500
              ? "Internal server error"
              : error?.message ?? "Request failed"
        }
      };

      const body = JSON.stringify(payload);

      res.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(body)
      });

      res.end(body);
    }
  });
}