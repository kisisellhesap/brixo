import { type FC } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout: FC = () => {
  return (
    <div>
      <Header />

      <main className='container my-10 min-h-[72vh] '>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
