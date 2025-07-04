import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../redux/store';
import {
  fromGeneralCartToPrivateCart,
  getCurrentUser,
  logoutUser,
} from '../../redux/actions/userActions';
import { deleteToAllCart } from '../../redux/actions/cartActions';
import type { User } from '../../types';
import toast from 'react-hot-toast';

const UserSidebar: FC = () => {
  const { currentUser, users } = useSelector((store: RootState) => store.userReducer);
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logout = async () => {
    console.log(cartProducts.length, 'cartProductslength');
    const findUser = users.find((item) => item.id === currentUser?.id);

    if (cartProducts) {
      console.log('cart dolu');
      const updateCartUser = { ...findUser, myCart: cartProducts };

      console.log(updateCartUser, 'updateCartUser');
      await dispatch(fromGeneralCartToPrivateCart(updateCartUser as User));
      await dispatch(deleteToAllCart());
    }
    await dispatch(logoutUser(currentUser?.id));
    await dispatch(getCurrentUser());

    console.log(currentUser);
    navigate('/login');
    console.log('çıkış yapıldı');
    toast.success('Logout successful');
  };

  return (
    <div
      className='absolute right-0 top-[65px] bg-pink  shadow-[0px_2px_10px_rgba(0,0,0,0.2)] max-lg:shadow-none
rounded-lg flex flex-col text-center font-bold italic z-[11] max-lg:static '
    >
      <Link
        to='profile/me'
        className='whitespace-nowrap hover:bg-black/10 p-3  max-lg:hover:bg-transparent '
      >
        Profile
      </Link>
      <button
        className='whitespace-nowrap hover:bg-black/10 p-3 max-lg:hover:bg-transparent'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserSidebar;
