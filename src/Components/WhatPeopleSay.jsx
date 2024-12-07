import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const WhatPeopleSay = () => {
    const slides = [
        { content: "FundBridge helped me raise money for my father’s surgery when I had no other options. It truly changed our lives.", name: "Emily Carter", designation: "Grateful Daughter" },
        { content: "I love contributing to meaningful causes on this website. It makes philanthropy accessible to everyone.", name: "ophia Martinez", designation: "Frequent Donor" },
        { content: "The platform’s transparency and ease of use are unmatched. It’s a great way to make a difference in the world", name: "Isabella Chen", designation: "Volunteer & Advocate" },
        { content: "I never thought I’d see so many people rally around my art project. This site gave me the confidence to chase my dreams.", name: "Marcus Hall,", designation: "Visual Artist" },
        { content: "Raising funds for my startup was seamless. FundBridge connected me with investors and supporters who believed in my vision.", name: "Victoria Reynolds", designation: "tartup Founder" },
    ];

    return (
        <div id="what-people-say-bg" className="py-28 text-white">
            <h2 className="text-5xl text-center mb-10">What people Say ?</h2>
            <div className="w-[90%] md:w-[70%] mx-auto p-6">
                <Swiper
                    modules={[Navigation, Autoplay]} // Register the necessary modules
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation // Enables navigation arrows
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop // Enables looping of slides
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <p className="text-2xl md:text-4xl font-light leading-normal mb-10 italic">
                                    "{slide.content}"
                                </p>
                                <div className="font-medium text-xl md:text-2xl">{slide.name}</div>
                                <div className="text-xl md:text-2xl font-light ">{slide.designation}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default WhatPeopleSay;
