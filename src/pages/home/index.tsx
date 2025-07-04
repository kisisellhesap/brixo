import Slider from './slider';
import Main from './main';
import { useEffect, type FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';

const Home: FC = () => {
  // const { currentUser } = useSelector((store: RootState) => store.userReducer);
  // const { cartProducts } = useSelector((store: RootState) => store.cartReducer);

  // const navigate = useNavigate();
  // const path = useLocation().pathname;

  // useEffect(() => {
  //   if (cartProducts.length !== 0 && currentUser && (path === '/login' || path === '/signup')) {
  //     navigate('/payment');

  //     return;
  //   }
  // }, [cartProducts, path]);

  return (
    <div className='flex flex-col gap-25'>
      <Slider />
      <Main />
    </div>
  );
};

export default Home;
