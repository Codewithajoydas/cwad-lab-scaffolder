import { useState } from "react";
import type { PingResponse } from "../shared/types.js";

export function App() {
  const [result, setResult] = useState<PingResponse | null>(null);

  async function checkBridge() {
    const response = await window.electronAPI.ping();
    setResult(response);
  }

  return (
    <main className="app-shell">
      <section className="card">
        <p className="eyebrow">CWAD Electron Template</p>
        <h1>Electron + React + TypeScript</h1>
        <p>
          Secure desktop foundation with an isolated renderer and a typed
          preload bridge.
        </p>

        <button type="button" onClick={checkBridge}>
          Test Electron IPC
        </button>

        {result && (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        )}
      </section>
    </main>
  );
}