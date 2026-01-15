import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { DiProvider } from "@/shared/lib/di/di.provider";
import { appContainer } from "./di/container";

export function App() {
  return (
    <DiProvider container={appContainer}>
      <RouterProvider router={router} />
    </DiProvider>
  );
}
