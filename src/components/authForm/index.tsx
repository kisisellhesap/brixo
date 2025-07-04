import { useState, type ChangeEvent, type FC, type FormEvent, type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Socialcons from '../sociaIcons';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import type { SignUser } from '../../types';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { getCurrentUser, getUsers, loginUser, registerUser } from '../../redux/actions/userActions';
import { fromPrivateCartToGeneralCart } from '../../redux/actions/cartActions';
import toast from 'react-hot-toast';

const AuthForm: FC = () => {
  const [user, setUser] = useState<SignUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const path = useLocation().pathname;
  const navigate = useNavigate();

  const { users } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*().])[A-Za-z\d!@#$%^&*().]{1,11}$/;
    return regex.test(password);
  };

  const handleSign = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (path === '/signup') {
      const filtered = users.some((item) => item.email === user.email);
      if (validatePassword(user.password) && !filtered) {
        console.log(user);
        console.log(filtered);

        await dispatch(registerUser(user));
        await dispatch(getUsers());

        navigate('/login');
        toast.success('Registration successful, please log in');
      } else {
        toast.error('Invalid Password');
      }
    } else {
      console.log(users);
      const filtered = users.find((item) => item.email === user.email);
      if (!filtered) {
        toast.error('User Not Found');

        return;
      }
      if (filtered.password !== user.password || filtered.email !== user.email) {
        console.log(' Email veya Şifre yanlış');
        toast.error('Email or password is incorrect');

        return;
      }

      const currentfiltered = users.find((item) => item.email === user.email);

      await dispatch(loginUser(currentfiltered));
      const currentUpdateUser = await dispatch(getCurrentUser()).unwrap();
      await dispatch(fromPrivateCartToGeneralCart(currentUpdateUser));
      toast.success('Login successful');

      navigate('/');
    }
  };

  // const questLogin = async (e: MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const getUser = await dispatch(getQuestUser()).unwrap();

  //   console.log(getUser);
  //   await dispatch(loginUser(getUser));
  //   const currentUpdateUser = await dispatch(getCurrentUser()).unwrap();
  //   await dispatch(fromPrivateCartToGeneralCart(currentUpdateUser));

  //   navigate('/');
  // };

  return (
    <div className='bg-pink  rounded-2xl w-[440px] h-[850px] max-[500px]:w-full max-[500px]:h-full max-[500px]:bg-pink/50'>
      <div className='flex flex-col h-full   px-6  py-8 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm flex flex-col  items-center justify-center gap-5 '>
          <img src='/assets/logo.png' className='w-[200px]' alt='' />
          <div className='min-h-[72px]'>
            {path === '/signup' ? (
              <h2 className=' text-center text-2xl/9 font-bold tracking-tight text-gray italic'>
                We don't want to see you among the crowds
              </h2>
            ) : (
              <h2 className='text-3xl text-red font-bold italic max-[500px]:text-center'>
                No Lines, No Crowds
              </h2>
            )}
          </div>
        </div>

        <div className=' mt-5 relative '>
          <div
            className={`w-[50%] h-[31.99px] rounded-lg bg-red ${
              path === '/signup' ? 'translate-x-[100%]' : 'translate-x-[0]'
            }`}
          ></div>
          <div className='absolute inset-0 w-[100%]  flex items-center font-bold italic'>
            <Link
              to='/login'
              className=' w-[50%] text-center cursor-pointer 
            '
            >
              Sign In
            </Link>
            <Link
              to='/signup'
              className=' w-[50%] text-center cursor-pointer 
            '
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className='mt-10 h-full sm:mx-auto sm:w-full flex flex-col sm:max-w-sm '>
          <form className='space-y-6' onSubmit={handleSign}>
            {path === '/signup' && (
              <div>
                <label htmlFor='firstName' className='block text-sm/6 text-gray font-bold'>
                  First Name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    autoComplete='firstName'
                    required
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6'
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            {path === '/signup' && (
              <div>
                <label htmlFor='lastName' className='block text-sm/6 text-gray font-bold'>
                  Last Name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    autoComplete='lastName'
                    required
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6'
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor='email' className='block text-sm/6 text-gray font-bold'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm/6 text-gray font-bold'>
                  Password
                </label>
                {path === 'signup' && (
                  <div className='text-sm'>
                    <a href='#' className=' text-red font-bold hover:text-red/80'>
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
              <div className='mt-2 relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md bg-white px-3 pr-10 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6'
                  onChange={handleChange}
                  maxLength={11}
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-2 top-0  h-full w-6 flex items-center justify-center cursor-pointer text-gray'
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-red px-3 py-1.5 text-sm/6 font-semibold text-pink shadow-xs hover:bg-red/80 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer'
              >
                {path === '/login' ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </form>

          <p className='mt-auto text-center text-sm/6 '>
            <Link to='/' className='text-red hover:text-red/80'>
              Continue without membership
            </Link>
          </p>

          <div className=' mt-5 flex  justify-center'>
            <Socialcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
