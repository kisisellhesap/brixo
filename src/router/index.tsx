import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Home from '../pages/home';
import Products from '../pages/products';
import Detail from '../pages/detail';
import Contact from '../pages/contact';
import Payment from '../pages/payment';
import Cart from '../pages/cart';
import Brixo from '../pages/brixo';
import AuthLayout from '../layout/AuthLayout';
import Profile from '../pages/profile';
import Me from '../pages/me';
import Orders from '../pages/orders';
import Favourites from '../pages/favourites';
import Settings from '../pages/settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/detail/:id', element: <Detail /> },
      { path: 'contact', element: <Contact /> },
      { path: 'payment', element: <Payment /> },
      { path: 'cart', element: <Cart /> },
      { path: 'brixo', element: <Brixo /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          { path: 'me', element: <Me /> },
          { path: 'orders', element: <Orders /> },
          { path: 'favourites', element: <Favourites /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);
