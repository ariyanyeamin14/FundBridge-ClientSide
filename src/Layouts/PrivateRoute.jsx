import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContex)

    if (loading) {
        return (
            <div>
                <div className='flex justify-center items-center min-h-screen'>
                    <span className="loading w-[150px] text-center loading-spinner text-[#ff2c64]"></span>
                </div>
            </div>
        )
    }

    if (user) {
        return children
    }

    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default PrivateRoute;