export function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);

  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store"
  });

  res.end(body);
}

export function sendNotFound(res) {
  sendJson(res, 404, {
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "Route not found"
    }
  });
}

export function sendMethodNotAllowed(res) {
  sendJson(res, 405, {
    success: false,
    error: {
      code: "METHOD_NOT_ALLOWED",
      message: "Method not allowed"
    }
  });
}