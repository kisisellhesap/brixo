import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getAllProducts } from "../redux/actions/getAllProducts";

const MainLayout: FC = () => {
  const { pathname } = useLocation();

  const isLogin = pathname === "/login";

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <section className="min-h-screen flex flex-col">
      {!isLogin && <Header />}
      <main className="container my-15 min-h-[100vh]">
        <Outlet />
      </main>

      {!isLogin && <Footer />}
    </section>
  );
};

export default MainLayout;
