import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { getCurrentUser, logoutUser } from '../../redux/actions/userActions';
import { Link, useNavigate } from 'react-router-dom';

const Logout: FC = () => {
  const { currentUser } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
  }, [currentUser]);

  const logout = async () => {
    await dispatch(logoutUser(currentUser?.id));
    await dispatch(getCurrentUser());

    navigate('/login');
    console.log('çıkış yapıldı');
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <p>You have been logged out successfully.</p>
      <button onClick={logout}>Click here to login again</button>
      <br />
      <Link to='/'>Go to Home</Link>
    </div>
  );
};

export default Logout;
