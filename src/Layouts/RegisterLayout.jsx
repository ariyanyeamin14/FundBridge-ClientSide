import React from 'react';
import Navbar from '../Components/Navbar';
import Register from '../Components/Register';

const RegisterLayout = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 h-screen'>
                <div className='hidden md:block md:col-span-1 xl:col-span-3'>

                </div>
                <div className='md:col-span-1 xl:col-span-2'>
                    <Register></Register>
                </div>
            </div>
        </div>
    );
};

export default RegisterLayout;