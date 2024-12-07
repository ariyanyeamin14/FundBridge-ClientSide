import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ImpactCard = ({ number, title, description }) => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className=' dark:bg-gray-950 text-gray-900 bg-gray-200 rounded-xl text-center p-6 md:py-10 border-2 dark:border-gray-700 border-gray-400 shadow-xl space-y-6'>
                <div className=''>
                    {
                        counterOn &&
                        <h2 className='text-[#1d22b8]  dark:text-[#ab58ff] text-5xl font-semibold mb-8'>
                            <CountUp end={number} duration={3} />+
                        </h2>
                    }
                </div>
                <h2 className='text-gray-900 dark:text-gray-100 text-4xl font-semibold '> {title} </h2>
                <p className=' dark:text-gray-300 text-gray-700'>{description}</p>
            </div>
        </ScrollTrigger>

    );
};

export default ImpactCard;