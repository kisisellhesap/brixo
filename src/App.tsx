import { useEffect, type FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { getCurrentUser, getUsers } from './redux/actions/userActions';
import type { AppDispatch, RootState } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsfromCart } from './redux/actions/cartActions';
import { getAllProducts } from './redux/actions/productActions';
import { Toaster } from 'react-hot-toast';

const App: FC = () => {
  const { users } = useSelector((store: RootState) => store.userReducer);
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductsfromCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    console.log('users', users);
  }, [users]);

  useEffect(() => {
    console.log('cartProducts', cartProducts);
  }, [cartProducts]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
