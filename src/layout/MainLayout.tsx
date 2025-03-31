import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Login from "../pages/login";

const MainLayout: FC = () => {
  const { pathname } = useLocation();

  const isLogin = pathname === "/login";

  return (
    <section className="min-h-screen flex flex-col">
      {!isLogin && <Header />}
      <main className="container">
        <Outlet />
      </main>

      {!isLogin && <Footer />}
    </section>
  );
};

export default MainLayout;
