import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header/header.component";

export const BaseLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
