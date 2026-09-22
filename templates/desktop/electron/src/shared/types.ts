export type PingResponse = {
  status: "ok";
  timestamp: string;
};

export type ElectronAPI = {
  ping: () => Promise<PingResponse>;
};