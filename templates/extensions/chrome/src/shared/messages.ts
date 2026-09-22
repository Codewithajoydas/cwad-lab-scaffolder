export type PingMessage = {
  type: "PING";
};

export type PingResponse = {
  type: "PONG";
  timestamp: string;
};