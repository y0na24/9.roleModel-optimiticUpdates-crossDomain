import "reflect-metadata";
import "./shared/lib/reatom/setup";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.component";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <App />
  </>,
);
