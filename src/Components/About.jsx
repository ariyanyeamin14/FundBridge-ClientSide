
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import aboutImg from '../../src/assets/about/about-img.png'
import aboutImg1 from '../../src/assets/about/1.png'
import aboutImg2 from '../../src/assets/about/2.png'
import aboutImg3 from '../../src/assets/about/3.png'
import aboutImg4 from '../../src/assets/about/4.png'
import aboutImg5 from '../../src/assets/about/5.png'

const About = () => {
    return (
        <div>
            <div className='w-[90%] md:w-[85%] mx-auto pt-20 flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex-1'>
                    <h1 className='text-4xl md:text-5xl font-bold pb-16 leading-normal'>About Our Activities</h1>
                    <p className='leading-relaxed mb-6'>
                        Welcome to FundBridge, your trusted platform for crowdfunding success. We empower individuals, innovators, and dreamers to bring their ideas to life by connecting them with a community of supporters willing to make a difference.</p>

                        <p className='leading-relaxed mb-6'> FundBridge is more than just a crowdfunding website; it’s a place where possibilities take shape. Whether you’re raising money for personal needs like medical expenses, pursuing creative ventures such as films or apps, or building the foundation of a groundbreaking startup, FundBridge offers the tools and support to turn your vision into reality. </p>

                        <p className='leading-relaxed mb-6'> We believe in the power of collaboration and community. Through FundBridge, you can share your story, inspire others, and receive the financial support needed to make an impact. Together, we can bridge the gap between ambition and achievement.

                        Let’s create something extraordinary—one contribution at a time.
                    </p>
                    <div className='mt-10'>
                        <Link to={`/about`} className="text-[#ff2c64] border-2 border-[#ff2c64] px-8 py-3 rounded-3xl uppercase">See More</Link>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='mx-auto' src={aboutImg} alt="" />
                </div>
            </div>
            <div id='about-slider-bg' >
                <div id='about-slider' className=' py-6'>
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // For screens <= 640px
                            },
                            768: {
                                slidesPerView: 2, // For screens <= 768px
                            },
                            1024: {
                                slidesPerView: 4, // For screens <= 1024px
                            },
                        }}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='p-8 bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8 bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8 bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-8  bg-[#d92051de]'>
                                <img className='mx-auto' src={aboutImg5} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default About;