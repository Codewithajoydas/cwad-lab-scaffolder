import { useState } from "react";
import type { PingResponse } from "../shared/messages";

export function App() {
  const [response, setResponse] = useState<PingResponse | null>(null);

  async function pingBackground() {
    const result = await chrome.runtime.sendMessage({
      type: "PING",
    });

    setResponse(result);
  }

  return (
    <main className="popup">
      <p className="eyebrow">CWAD Extension</p>
      <h1>Chrome Extension</h1>
      <p>Manifest V3 + React + TypeScript + Vite.</p>

      <button type="button" onClick={pingBackground}>
        Test Service Worker
      </button>

      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </main>
  );
}