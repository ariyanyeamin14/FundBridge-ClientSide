import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ImpactCard = ({ number, title, description }) => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div id='impact' className='dark:bg-[#0c121c] text-gray-900 bg-[#f7f8fa] rounded-xl text-center p-6 md:py-10 border-2 dark:border-gray-950 border-gray-200 shadow-lg dark:shadow-dark space-y-6'>
                <div className=''>
                    {
                        counterOn &&
                        <h2 className='text-[#ff2c64]  dark:text-[#ff2c64] text-4xl md:text-5xl font-semibold mb-8'>
                            <CountUp end={number} duration={3} />+
                        </h2>
                    }
                </div>
                <h2 className='text-gray-900 dark:text-gray-100 text-3xl md:text-4xl font-semibold '> {title} </h2>
                <p className=' dark:text-gray-300 text-gray-700'>{description}</p>
            </div>
        </ScrollTrigger>

    );
};

export default ImpactCard;