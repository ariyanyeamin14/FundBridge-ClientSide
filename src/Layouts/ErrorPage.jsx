import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen gap-10'>
                <h1 className=' font-bold text-5xl md:text-6xl'>Not Found Page</h1>
                <Link className=' px-6 py-3 rounded-xl font-medium' to={'/'}>Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;