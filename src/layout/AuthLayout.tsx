import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../redux/store';

const AuthLayout: FC = () => {
  const { currentUser } = useSelector((store: RootState) => store.userReducer);
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    if (currentUser && (path === '/login' || path === '/signup')) {
      navigate('/');

      return;
    }
  }, [currentUser, path]);

  if (!currentUser) {
    return (
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default AuthLayout;
