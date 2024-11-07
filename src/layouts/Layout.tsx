import React from 'react';
import Sidebar from '../components/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=' flex text-gray-600'>
      <Sidebar />
      <main className='w-full flex-1 grid place-content-center px-8 py-10 overflow-y-scroll bg-neutral-100'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
