import { useEffect, useState } from "react";

export function App() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    void chrome.storage.local.get(["enabled"]).then((result) => {
      if (typeof result.enabled === "boolean") {
        setEnabled(result.enabled);
      }
    });
  }, []);

  async function updateEnabled(value: boolean) {
    setEnabled(value);
    await chrome.storage.local.set({ enabled: value });
  }

  return (
    <main className="options">
      <h1>Extension Settings</h1>
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(event) => updateEnabled(event.target.checked)}
        />
        Enable extension
      </label>
    </main>
  );
}