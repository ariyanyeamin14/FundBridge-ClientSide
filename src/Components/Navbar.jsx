import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const Navbar = () => {

    const { signoutUser, user } = useContext(AuthContex)
    const links = <>
        <Link to={'/'}>Home</Link>
        <Link to={'/campaigns'}>All Campaign</Link>
        <Link to={'/addCampaign'}>Add New Campaign</Link>
        <Link to={`/myCampaign/${user?.email}`}>My  Campaign</Link>
        <Link to={`/myDonations/${user?.email}`}>My Donations</Link>
    </>
    return (
        <div className="navbar bg-base-100 h-10 md:h-14 w-[95%] lg:[w-85%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">FundBridge</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-6 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                {
                    user ?
                        <>
                            <div className="relative group w-10 md:w-14">
                                <img
                                    className="w-10 md:w-14 rounded-full group-hover:hidden"
                                    src={`${user.photoURL}`}
                                    alt=""
                                />
                                <h2 className="absolute inset-0 hidden group-hover:flex justify-center items-center text-black">
                                    {user.displayName}
                                </h2>
                            </div>
                            <button onClick={signoutUser} className='btn btn-primary btn-sm md:btn-md'>Logout</button>
                        </> :
                        <>
                            <Link to={'/login'}>Log in</Link>
                            <Link to={'/register'}>Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;