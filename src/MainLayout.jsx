import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

const MainLayout = () => {
    return (
        <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;