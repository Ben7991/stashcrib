import { createRoot } from "react-dom/client";
import "@repo/ui/styles/global.css";
import { App } from "./app";

createRoot(document.getElementById("app")!).render(<App />);
