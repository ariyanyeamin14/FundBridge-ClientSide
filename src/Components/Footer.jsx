import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id='footer' className=" bg-[#f7f8fa] overflow-x-auto  my-20 dark:bg-gray-950 dark:text-gray-100 text-gray-800">
            <div className='footer w-[90%] md:w-[85%] mx-auto py-20 dark:text-gray-100 text-gray-800'>
                <aside className='md:justify-self-center'>
                    <Link to={'/'} className="text-3xl font-semibold  tracking-wide">Fund<span className='text-[#ff2c64]'>Bridge</span></Link>
                    <br />
                    <p>Providing reliable tech since 1992</p>
                </aside>
                <nav className='md:justify-self-center space-y-3'>
                    <h6 className="footer-title">Home</h6>
                    <a href="#about">About</a>
                    <a href="#testimonial">Testimonial</a>
                    <a href="#volunteers">Volunteers</a>
                    <a href="#contact">Contact</a>              
                </nav>
                <nav className='md:justify-self-center space-y-3'>
                    <h6 className="footer-title">CampaignS</h6>
                    <a href="/campaigns">All Campaign</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    <a href="/">Home</a>
                </nav>
                <nav className='md:justify-self-center space-y-2'>
                    <h6 className="footer-title">Connect With Us</h6>
                    <Link to='https://www.facebook.com/ariyan.yeamin.1/'> <FaFacebook color='#ff2c64' size={30} /> </Link>
                    <Link to='https://x.com/'> <AiFillTwitterCircle color='#ff2c64' size={30} /> </Link>
                    <Link to='https://bd.linkedin.com/'> <FaLinkedin color='#ff2c64' size={30}/> </Link>
                    <Link to='https://web.whatsapp.com/'> <IoLogoWhatsapp color='#ff2c64' size={30}/> </Link>
                </nav>
            </div>
            <div>
                <footer className=" w-full  dark:text-gray-100 text-gray-800 items-center p-4 ">
                    <aside className=" text-center">
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by FundBridge</p>
                    </aside>
                </footer>
            </div>
        </footer >
    );
};

export default Footer;