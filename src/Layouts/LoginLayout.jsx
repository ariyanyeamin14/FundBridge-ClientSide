import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';

const LoginLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 h-screen'>
                <div className='hidden md:block md:col-span-1 xl:col-span-3'>

                </div>
                <div className='md:col-span-1 xl:col-span-2'>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;