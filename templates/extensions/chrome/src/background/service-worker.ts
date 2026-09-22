import type { PingMessage, PingResponse } from "../shared/messages";

chrome.runtime.onMessage.addListener(
  (
    message: PingMessage,
    _sender,
    sendResponse: (response: PingResponse) => void,
  ) => {
    if (message.type !== "PING") {
      return false;
    }

    sendResponse({
      type: "PONG",
      timestamp: new Date().toISOString(),
    });

    return false;
  },
);