import { BrowserWindow } from "electron";
import { join } from "node:path";

export function createMainWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    show: false,
    webPreferences: {
      preload: join(import.meta.dirname, "../preload/preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  window.once("ready-to-show", () => {
    window.show();
  });

  if (process.env.NODE_ENV === "development") {
    void window.loadURL("http://127.0.0.1:5173");
    window.webContents.openDevTools();
  } else {
    void window.loadFile(join(import.meta.dirname, "../renderer/index.html"));
  }

  return window;
}