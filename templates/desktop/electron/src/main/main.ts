import { app, ipcMain } from "electron";
import { createMainWindow } from "./window.js";

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    const window = createMainWindow();

    if (window.isMinimized()) {
      window.restore();
    }

    window.focus();
  });

  app.whenReady().then(() => {
    ipcMain.handle("app:ping", () => ({
      status: "ok",
      timestamp: new Date().toISOString(),
    }));

    createMainWindow();

    app.on("activate", () => {
      if (process.platform === "darwin") {
        createMainWindow();
      }
    });
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});