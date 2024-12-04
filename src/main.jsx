import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
  return (
    <div>
      <h1>Clipboard Histroy</h1>
      <p>Coming soon!</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
