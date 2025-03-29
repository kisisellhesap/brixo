import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const MainLayout: FC = () => {
  return (
    <section className="min-h-screen bg-aa">
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
