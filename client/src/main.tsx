import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Force dark mode on root html element
if (typeof document !== "undefined") {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
