import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import person1 from '../assets/testimonial/1.png'
import person2 from '../assets/testimonial/2.png'
import person3 from '../assets/testimonial/3.png'
import person4 from '../assets/testimonial/4.png'
import person5 from '../assets/testimonial/5.png'
import { FaQuoteLeft } from "react-icons/fa";

const WhatPeopleSay = () => {
    const slides = [
        { content: "FundBridge helped me raise money for my father’s surgery when I had no other options. It truly changed our lives.", name: "Emily Carter", designation: "Grateful Daughter", image: person1 },
        { content: "I love contributing to meaningful causes on this website. It makes philanthropy accessible to everyone.", name: "ophia Martinez", designation: "Frequent Donor", image: person2 },
        { content: "The platform’s transparency and ease of use are unmatched. It’s a great way to make a difference in the world", name: "Isabella Chen", designation: "Volunteer & Advocate", image: person3 },
        { content: "I never thought I’d see so many people rally around my art project. This site gave me the confidence to chase my dreams.", name: "Marcus Hall,", designation: "Visual Artist", image: person4 },
        { content: "Raising funds for my startup was seamless. FundBridge connected me with investors and supporters who believed in my vision.", name: "Victoria Reynolds", designation: "tartup Founder", image: person5 },
    ];

    return (
        <div id="testimonial" className="section py-28 my-28 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">What people Say ?</h2>
            <div className="w-[90%] md:w-[70%] mx-auto p-6">
                <Swiper
                    modules={[Navigation, Autoplay]} // Register the necessary modules
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // For screens <= 640px
                        },
                        768: {
                            slidesPerView: 1, // For screens <= 768px
                        },
                        1024: {
                            slidesPerView: 2, // For screens <= 1024px
                        },
                    }}
                    // Enables navigation arrows
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop // Enables looping of slides
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="bg-[#ff2c64] p-10 rounded-2xl">
                                    <div><FaQuoteLeft size={50} /></div>
                                    <p className="text-2xl mt-5 font-light leading-normal mb-10 italic">
                                        "{slide.content}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-10">
                                    <div>
                                        <div className="font-medium text-[#ff2c64] text-xl md:text-2xl">{slide.name}</div>
                                        <div className="text-xl font-light ">{slide.designation}</div>
                                    </div>
                                    <div>
                                        <img className="w-[70px] rounded-full" src={slide.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default WhatPeopleSay;
