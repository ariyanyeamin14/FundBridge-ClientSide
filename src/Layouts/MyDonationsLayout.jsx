import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../Components/DonationCard';
import { Typewriter } from 'react-simple-typewriter';

const MyDonationsLayout = () => {
    const donations = useLoaderData()
    return (
        <div className='w-[90%] md:w-[85%] mx-auto my-20 min-h-screen'>
            <h1 className='text-3xl lg:text-5xl font-bold text-center my-20'>
                <Typewriter
                    words={['My Donations', 'My Donations']}
                    loop={10}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {
                    donations.map(donation => <DonationCard
                        key={donation._id}
                        donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default MyDonationsLayout;