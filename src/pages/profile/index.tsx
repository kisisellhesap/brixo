import { type FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile: FC = () => {
  return (
    <div className='flex gap-10  min-h-[70vh] max-lg:flex-col '>
      <aside className='flex flex-col shadow-[0px_2px_10px_rgba(0,0,0,0.2)] overflow-hidden rounded-lg  min-w-[130px] sticky top-[10px] h-fit max-lg:static max-lg:flex-row max-lg:justify-between'>
        <NavLink
          to='/profile/me'
          className={({ isActive }) =>
            `p-3 text-center  max-lg:w-full  ${
              isActive ? 'bg-red text-white' : 'hover:bg-black/10'
            }`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to='/profile/orders'
          className={({ isActive }) =>
            `p-3 text-center max-lg:w-full  ${isActive ? 'bg-red text-white' : 'hover:bg-black/10'}`
          }
        >
          Orders
        </NavLink>
        <NavLink
          to='/profile/favourites'
          className={({ isActive }) =>
            `p-3 text-center  max-lg:w-full ${isActive ? 'bg-red text-white' : 'hover:bg-black/10'}`
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to='/profile/settings'
          className={({ isActive }) =>
            `p-3 text-center  max-lg:w-full ${isActive ? 'bg-red text-white' : 'hover:bg-black/10'}`
          }
        >
          Settings
        </NavLink>
      </aside>
      <div className=' w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
