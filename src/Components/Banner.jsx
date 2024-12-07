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
import slider5 from "../assets/slider/slider-5.jpg"
import slider6 from "../assets/slider/slider-6 .jpg"


const Banner = () => {
    const slides = [
        { id: 1, title: "Publishing My First Children's Book", description: "I'm an aspiring author creating a book to inspire kids about kindness and resilience. Help bring this story to life!", bg: slider0 },
        { id: 2, title: "Medical Treatment for Jane's Heart Surgery", description: "Jane, a single mother of two, urgently needs heart surgery. Your support can help her get the treatment she needs and save her life.", bg: slider1 },
        { id: 3, title: "Empowering Communities with Clean Energy", description: "We are a small startup bringing solar energy solutions to rural areas. Help us expand and empower communities with sustainable energy.", bg: slider2 },
        { id: 4, title: "ArtConnect: A Platform for Emerging Artists", description: "ArtConnect is an app designed to connect emerging artists with audiences and buyers worldwide. Join us in supporting creativity.", bg: slider3 },
        { id: 5, title: "Expanding Our Local Bakery", description: "Our family bakery has been serving delicious pastries for years. With your help, we can expand and reach more customers.", bg: slider4 },
        { id: 6, title: "Save the Endangered Forest Elephants", description: "We aim to raise funds to support conservation efforts for endangered forest elephants in Africa. Your contribution matters!", bg: slider5 },
        { id: 7, title: "Smart Farming for a Sustainable Future", description: "Our team is building IoT-based smart farming solutions to help farmers increase yields while conserving resources.", bg: slider6 }
    ];

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                                <h1 id='transperant-text-banner' className='text-5xl md:text-6xl xl:text-8xl text-white font-bold leading-relaxed'>
                                    
                                    <Typewriter
                                        words={[`${slide.title}`, `${slide.title}`]}
                                        loop={30}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={50}
                                        deleteSpeed={0}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className='text-white w-[90%] md:w-[60%] text-lg font-medium '>
                                    {slide.description}
                                </p>
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