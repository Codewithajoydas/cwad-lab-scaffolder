export async function readJsonBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");

  try {
    return JSON.parse(rawBody);
  } catch {
    const error = new Error("Invalid JSON body");
    error.statusCode = 400;
    error.code = "INVALID_JSON";
    throw error;
  }
}