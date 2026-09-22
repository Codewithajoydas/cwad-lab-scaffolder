const markerId = "cwad-extension-marker";

if (!document.getElementById(markerId)) {
  const marker = document.createElement("div");

  marker.id = markerId;
  marker.textContent = "CWAD Extension Loaded";
  marker.style.position = "fixed";
  marker.style.bottom = "12px";
  marker.style.right = "12px";
  marker.style.zIndex = "2147483647";
  marker.style.padding = "8px 12px";
  marker.style.borderRadius = "8px";
  marker.style.background = "#172033";
  marker.style.color = "#ffffff";
  marker.style.fontFamily = "system-ui, sans-serif";
  marker.style.fontSize = "12px";

  document.body.appendChild(marker);
}