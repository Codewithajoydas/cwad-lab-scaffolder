import { contextBridge, ipcRenderer } from "electron";

const electronAPI = {
  ping: () => ipcRenderer.invoke("app:ping"),
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);