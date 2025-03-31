import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Products from "./pages/products";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Payment from "./pages/payment";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },

      {
        path: "home", // 'home' sayfası alt yolu
        element: <Home />,
      },
      {
        path: "products", // 'home' sayfası alt yolu
        element: <Products />,
      },
      {
        path: "contact", // 'home' sayfası alt yolu
        element: <Contact />,
      },
      {
        path: "product/detail/:id", // 'home' sayfası alt yolu
        element: <Detail />,
      },
      {
        path: "cart", // 'home' sayfası alt yolu
        element: <Cart />,
      },
      {
        path: "payment", // 'home' sayfası alt yolu
        element: <Payment />,
      },
      {
        path: "*", // Diğer bilinmeyen yollar için 404 sayfası
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
