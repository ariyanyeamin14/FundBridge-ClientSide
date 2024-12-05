import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContex)

    if (loading) {
        return (
            <div>
                <div className='flex justify-center items-center'>
                    <span className="loading w-[150px] text-center loading-spinner text-warning"></span>
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