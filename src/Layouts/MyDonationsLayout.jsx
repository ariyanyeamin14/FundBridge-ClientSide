import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../Components/DonationCard';

const MyDonationsLayout = () => {
    const donations = useLoaderData()
    console.log(donations)
    return (
        <div className='w-[90%] md:w-[85%] mx-auto my-20'>
            <h1 className='text-3xl lg:text-5xl font-bold text-center my-10'>My Donations</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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