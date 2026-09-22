import { getHealth } from "../services/health.service.js";
import { sendJson } from "../http/response.js";

export function healthController(_req, res) {
  sendJson(res, 200, getHealth());
}