import Lottie from 'lottie-react';
import React from 'react';
import contactAnimation from '../assets/contact/contact.json'

const Contact = () => {
    return (
        <div className=''>
            <div className=' w-[90%]  md:w-[85%] py-20 mx-auto'>
                <h1 className='text-4xl md:text-5xl font-bold text-center'>Contact With Us</h1>
                <div className='flex flex-col lg:flex-row mt-14 gap-10 items-center'>
                    <div className=' flex-1'>
                        <Lottie animationData={contactAnimation} loop={true} />
                    </div>
                    <div className='flex-1 bg-[#f7f8fa] dark:bg-slate-950 p-10 rounded-2xl w-full space-y-8'>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='flex-1'>
                                <h4 className='uppercase text-xs mb-4'>Your Name</h4>
                                <input className='py-2 md:p-3  w-full rounded-md border border-[#b0b0b0] dark:bg-gray-300 focus:border-[#ff014f] focus:outline-none ' type="text" name="" id="" />
                            </div>
                            <div className='flex-1'>
                                <h4 className='uppercase text-xs mb-4'>Email</h4>
                                <input className='py-2 md:p-3 w-full rounded-md border dark:bg-gray-300 border-[#b0b0b0] focus:border-[#ff014f] focus:outline-none ' type="text" name="" id="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='flex-1'>
                                <h4 className='uppercase text-xs mb-4'>Subject</h4>
                                <input className='py-2 md:p-3 w-full rounded-md border dark:bg-gray-300 border-[#b0b0b0] focus:border-[#ff014f] focus:outline-none ' type="text" name="" id="" />
                            </div>
                            <div className='flex-1'>
                                <h4 className='uppercase text-xs mb-4'>Phone Number</h4>
                                <input className='py-2 md:p-3 w-full rounded-md border dark:bg-gray-300 border-[#b0b0b0] focus:border-[#ff014f] focus:outline-none ' type="text" name="" id="" />
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='uppercase text-xs mb-4'>Your Message</h4>
                            <textarea className=' p-3 w-full rounded-md border dark:bg-gray-300 border-[#b0b0b0] focus:border-[#ff014f] focus:outline-none ' name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className='space-x-6'>
                            <input className='uppercase cursor-pointer px-5 py-3 lg:px-8 lg:py-4 bg-[#ff2c64] text-white' type="submit" value="Send Message" />
                            <button className='uppercase cursor-pointer px-5 py-3 lg:px-8 lg:py-4 bg-[#ff2c64] text-white '>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;