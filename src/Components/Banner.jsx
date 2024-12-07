import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import slider0 from "../assets/slider/slider-0.jpg"
import slider1 from "../assets/slider/slider-1.jpg"
import slider2 from "../assets/slider/slider-2.jpg"
import slider3 from "../assets/slider/slider-3.jpg"
import slider4 from "../assets/slider/slider-4.jpg"
import slider5 from "../assets/slider/slider-5.png"
import slider6 from "../assets/slider/slider-6.jpg"


const Banner = () => {
    const slides = [
        { id: 1, text: 'Slide 1', bg: slider0 },
        { id: 2, text: 'Slide 2', bg: slider1 },
        { id: 3, text: 'Slide 3', bg: slider2 },
        { id: 4, text: 'Slide 3', bg: slider3 },
        { id: 5, text: 'Slide 3', bg: slider4 },
        { id: 6, text: 'Slide 3', bg: slider5 },
        { id: 7, text: 'Slide 3', bg: slider6 }
    ];

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                className="w-full h-screen"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        <img
                            src={slide.bg}
                            alt={slide.text}
                            className="w-full h-full object-cover"
                        />
                        <div id='gradient-bg' className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                            <div className='w-[80%] mx-auto space-y-8'>
                                <h1 id='transperant-text-banner' className='text-5xl md:text-6xl xl:text-8xl text-white font-bold leading-relaxed'>Spread Warmth This Winter</h1>
                                <p className='text-white w-[90%] md:w-[60%] text-lg font-medium '>A simple act of kindness can warm a heart this winter. Your donation of coats, hats, and warm clothing can transform a cold night into a comforting one for someone in need. Let’s show that together, our community cares.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10">
                <FaArrowLeft size={24} />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10">
                <FaArrowRight size={24} />
            </button>
        </div>
    );
};

export default Banner;