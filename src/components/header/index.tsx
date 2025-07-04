import { useEffect, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import HeaderInfo from './header-info';
import { BiUser } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import Socialcons from '../sociaIcons';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import UserSidebar from '../userSidebar';
import { FaCrown } from 'react-icons/fa6';
import { GiAndroidMask } from 'react-icons/gi';

const Header: FC = () => {
  const { currentUser } = useSelector((store: RootState) => store.userReducer);

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isHiddenSideBar, setIsHiddenSideBar] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClose = (e: Event) => {
      if (!(e.target as HTMLElement).closest('.close-window')) {
        setIsHidden(false);
      }

      if (!(e.target as HTMLElement).closest('.close-sidebar')) {
        setIsHiddenSideBar(false);
      }
    };

    document.body.addEventListener('click', handleClose);

    return () => {
      document.body.removeEventListener('click', handleClose);
    };
  }, []);

  return (
    <header className=' flex flex-col gap-3 '>
      <HeaderInfo />
      <div className='container flex items-center justify-between '>
        <img src='/assets/logo.png' className='w-[140px]' />

        <RxHamburgerMenu
          className='text-4xl text-red hidden  max-lg:block cursor-pointer close-window'
          onClick={() => setIsHidden(!isHidden)}
        />
        <div
          className={`w-full flex items-center justify-end gap-10 max-lg:justify-start max-lg:fixed max-lg:pb-5 max-lg:max-w-[220px] max-lg:inset-0 max-lg:flex-col max-lg:z-10  max-lg:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)] max-lg:bg-pink/90 max-lg:backdrop-blur-[8px]  transition close-window ${
            isHidden
              ? ' max-lg:opacity-100 max-lg:pointer-events-auto'
              : 'max-lg:opacity-0 max-lg:pointer-events-none'
          }
          }`}
        >
          <div className='hidden max-lg:flex flex-col gap-[2.8rem] mt-[1.6rem] '>
            <Socialcons />
            <img src='/assets/logo.png' className='w-[140px]' />
          </div>

          <nav className='flex  gap-8 max-lg:flex-col max-lg:text-center max-lg:mt-15 '>
            <Link to='/' className='font-bold italic text-lg'>
              Home
            </Link>
            <Link to='products' className='font-bold italic text-lg'>
              Products
            </Link>
            <Link to='contact' className='font-bold italic text-lg'>
              Contact
            </Link>
          </nav>

          {currentUser && currentUser.id !== '0' ? (
            <div className=' relative   mt-auto flex flex-col gap-3 items-center'>
              <div className='relative cursor-pointer close-sidebar '>
                <GiAndroidMask
                  className=' text-5xl text-red box-shadow p-1 rounded-full relative cursor-pointer close-sidebar '
                  onClick={() => {
                    if (!isMobile) {
                      setIsHiddenSideBar(!isHiddenSideBar);
                    } else {
                      setIsHiddenSideBar(true);
                    }
                  }}
                />
                {currentUser.role === 'admin' && (
                  <FaCrown className='absolute right-[-10px] top-[-10px] text-xl rotate-45 text-red' />
                )}
              </div>

              {(isMobile || isHiddenSideBar) && <UserSidebar />}
            </div>
          ) : (
            <Link
              to='login'
              className='flex gap-2 items-end p-2 py-1 rounded-lg cursor-pointer bg-red text-pink shadow-md max-lg:mt-auto'
              // onClick={async () => {
              //   await dispatch(deleteToAllCart());
              //   await dispatch(logoutUser(currentUser?.id));
              //   await dispatch(getCurrentUser());

              //   console.log(currentUser);
              //   navigate('/login');
              //   console.log('quest hesaptan çıkış yapıldı');
              // }}
            >
              <BiUser className='text-4xl' />
              <div className='flex flex-col items-start font-bold'>
                <span className='text-lg'>Login</span>
                <span className='text-[10px]  italic'>or Register</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
