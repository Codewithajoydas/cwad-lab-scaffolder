import { healthController } from "../controllers/health.controller.js";
import { sendJson } from "../http/response.js";
import { sendMethodNotAllowed, sendNotFound } from "../http/response.js";

export function handleRoutes(req, res) {
  const url = new URL(req.url ?? "/", "http://localhost");

  if (url.pathname === "/") {
    if (req.method !== "GET") {
      sendMethodNotAllowed(res);
      return;
    }

    sendJson(res, 200, {
      name: "CWAD Node API",
      status: "running"
    });
    return;
  }

  if (url.pathname === "/api/v1/health") {
    if (req.method !== "GET") {
      sendMethodNotAllowed(res);
      return;
    }

    healthController(req, res);
    return;
  }

  sendNotFound(res);
}