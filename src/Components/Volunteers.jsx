import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import volunteer1 from '../assets/volunteers/volundeer1.jpg'
import volunteer2 from '../assets/volunteers/volundeer2.jpg'
import volunteer3 from '../assets/volunteers/volundeer3.jpg'
import volunteer4 from '../assets/volunteers/volundeer4.jpg'
import volunteer5 from '../assets/volunteers/volundeer5.jpg'
import volunteer6 from '../assets/volunteers/volundeer6.jpg'
import volunteer7 from '../assets/volunteers/volundeer7.jpg'
import volunteer8 from '../assets/volunteers/volundeer8.jpg'
import volunteer9 from '../assets/volunteers/volundeer9.jpg'

const Volunteers = () => {
    const slides = [
        { name: "Emily Carter", image: volunteer1 },
        { name: "Michael Johnson", image: volunteer2 },
        { name: "Sophia Brown", image: volunteer3 },
        { name: "Olivia Wilson", image: volunteer4 }, // Lady
        { name: "Isabella Martinez", image: volunteer5 }, // Lady
        { name: "James Anderson", image: volunteer6 },
        { name: "William Taylor", image: volunteer7 },
        { name: "Alexander Harris", image: volunteer8 },
        { name: "Benjamin Clark", image: volunteer9 },
    ];
    
    return (
        <div className='w-[90%] md:w-[85%] mx-auto my-20'>
            <h1 className='text-4xl md:text-5xl font-bold text-center pb-16 leading-normal'>Our Volunteers</h1>
            <div className=''>
                <Swiper
                    modules={[Navigation, Autoplay]} // Register the necessary modules
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // For screens <= 640px
                        },
                        768: {
                            slidesPerView: 2, // For screens <= 768px
                        },
                        1024: {
                            slidesPerView: 4, // For screens <= 1024px
                        },
                    }}
                    // Enables navigation arrows
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop // Enables looping of slides
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center'>
                                <div>
                                    <img className='w-[400px]' src={slide.image} alt="" />
                                </div>
                                <div className='bg-[#ff2c64] py-5 px-14 text-white w-fit -mt-10'>
                                    <h1 className='text-2xl'>{slide.name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Volunteers;