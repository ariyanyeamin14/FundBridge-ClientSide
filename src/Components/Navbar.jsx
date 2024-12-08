import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';
import ThemeToggle from './ThemeToggle';
import { LuSquareMenu } from 'react-icons/lu';

const Navbar = () => {

    const { signoutUser, user } = useContext(AuthContex)
    const [active, setActive] = useState(false)
    const links = <>
        <Link to={'/'}>Home</Link>
        <Link to={'/campaigns'}>All Campaign</Link>
        <Link to={'/addCampaign'}>Add New Campaign</Link>
        <Link to={`/myCampaign/${user?.email}`}>My  Campaign</Link>
        <Link to={`/myDonations/${user?.email}`}>My Donations</Link>
    </>
    const handleMobileMenu = () => {
         (active)
        return setActive(!active)

    }
    return (
        <div className=" bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className='w-[95%] lg:[w-85%] navbar mx-auto  h-10 md:h-14'>
                <div className="navbar-start w-fit lg:w-[50%]">
                    <Link to={'/'} className="btn btn-ghost  text-xl px-0">FundBridge</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-6 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end w-full lg:w-[50%] items-center justify-end justify-items-end  justify-self-end jus space-x-5">
                    <div>
                        <ThemeToggle></ThemeToggle>
                    </div>
                    <div>
                        {
                            user ?
                                <div className='flex items-center gap-3 md:gap-6'>
                                    <div className="relative group w-10 md:w-14">
                                        <img
                                            className="w-10 border-2 border-[#1d22b8] dark:border-[#f0f647] md:w-14 rounded-full group-hover:hidden"
                                            src={`${user.photoURL}`}
                                            alt=""
                                        />
                                        <h2 className="absolute inset-0 hidden group-hover:flex justify-center items-center text-black dark:text-white">
                                            {user.displayName}
                                        </h2>
                                    </div>
                                    <button onClick={signoutUser} className='btn bg-[#1d22b8] dark:bg-[#f0f647] dark:text-black border-none outline-none text-white  btn-primary btn-sm md:btn-md'>Logout</button>
                                </div> :
                                <div className='flex gap-4 items-center'>
                                    <Link to={'/login'}>Log in</Link>
                                    <Link to={'/register'}>Register</Link>
                                </div>
                        }
                    </div>
                    <div>
                        <LuSquareMenu color='' className='text-[#1d22b8] dark:text-[#f0f647] lg:hidden' onClick={() => handleMobileMenu()} size={30} />
                    </div>
                </div>
            </div>
            <div onClick={() => setActive(!active)} className={` bg-[#1d22b8] dark:bg-[#f0f647] dark:text-black text-white  absolute grid right-2 z-10  p-6 gap-5 rounded-xl duration-1000   ${active ? "top-14 " : "-top-80"}`}>
                {links}
            </div>
        </div>
    );
};

export default Navbar;