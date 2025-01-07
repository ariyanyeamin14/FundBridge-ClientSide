import React, { useContext, useState } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import ThemeToggle from './ThemeToggle';
import { LuSquareMenu } from 'react-icons/lu';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const { signoutUser, user } = useContext(AuthContex)
    const [active, setActive] = useState(false)
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/campaigns">All Campaign</NavLink>
        <NavLink to="/testimonial">Testimonial</NavLink>
        <NavLink to="/volunteers">Volunteers</NavLink>
        { user && <NavLink to={'/addCampaign'}>Add New Campaign</NavLink> }
        { user && <NavLink to={`/myCampaign/${user?.email}`}>My Campaign</NavLink>}
        { user && <NavLink to={`/myDonations/${user?.email}`}>My Donations</NavLink>}
        
    </>
    const handleMobileMenu = () => {
        (active)
        return setActive(!active)
    }
    return (
        <div className='fixed top-0 w-full z-50 '>
            <div className=" bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
                <div className='w-[95%] lg:[w-85%] navbar mx-auto  h-10 md:h-14'>
                    <div className="navbar-start w-fit lg:w-[50%]">
                        <Link to={'/'} className="text-2xl font-semibold  tracking-wide">Fund<span className='text-[#ff2c64]'>Bridge</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-6 items-center menu-horizontal px-1">
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
                                                className="w-10 border-2 border-[#ff2c64] md:w-14 rounded-full group-hover:hidden"
                                                src={`${user.photoURL}`}
                                                alt=""
                                            />
                                            <h2 className="absolute inset-0 hidden group-hover:flex justify-center items-center text-black dark:text-white">
                                                {user.displayName}
                                            </h2>
                                        </div>
                                        <button onClick={signoutUser} className='btn bg-[#ff2c64]  border-none outline-none text-white  btn-sm md:btn-md'>Logout</button>
                                    </div> :
                                    <div className='flex gap-4 items-center'>
                                        <Link to={'/login'}>Log in</Link>
                                        <Link to={'/register'}>Register</Link>
                                    </div>
                            }
                        </div>
                        <div>
                            <LuSquareMenu color='' className='text-[#ff2c64] lg:hidden' onClick={() => handleMobileMenu()} size={30} />
                        </div>
                    </div>
                </div>
                <div onClick={() => setActive(!active)} className={` bg-[#ff2c64] lg:hidden text-white flex flex-col absolute top-16  z-10 py-10 px-16 rounded-md gap-10 duration-1000  h-screen ${active ? " -right-2 " : " -right-80 "}`}>
                    {links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;