import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <aside className='w-72 h-screen sticky top-0 border-r border-gray-300'>
      <nav className='w-64 m-auto my-8'>
        <ul className='flex flex-col gap-1 font-bold text-gray-500'>
          <li className={`h-10 flex items-center gap-1 hover:bg-gray-100 hover:text-indigo-400 ${location.pathname === '/' && 'bg-gray-100 text-indigo-400'}`}><Link to='/' className='w-full h-full inline-flex items-center pl-2'><HomeIcon className='mr-2' />Home</Link></li>
          <li className={`h-10 flex items-center gap-1 hover:bg-gray-100 hover:text-indigo-400 ${location.pathname === '/about' && 'bg-gray-100 text-indigo-400'}`}><Link to='/about' className='w-full h-full inline-flex items-center pl-2'><PersonIcon className='mr-2' />About</Link></li>
          <li className={`h-10 flex items-center gap-1 hover:bg-gray-100 hover:text-indigo-400 ${location.pathname === '/contact' && 'bg-gray-100 text-indigo-400'}`}><Link to='/contact' className='w-full h-full inline-flex items-center pl-2'><EmailIcon className='mr-2' />Contact</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
