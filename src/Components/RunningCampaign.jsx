import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './CampaignCard';

const RunningCampaign = () => {
    const campaigns = useLoaderData()


    return (
        <div className='w-[90%] md:w-[85%] mx-auto py-32'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-16'>Running Campaigns</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    campaigns.map( campaign => <CampaignCard 
                        key={campaign._id} 
                        campaign={campaign}></CampaignCard> )
                }
            </div>
        </div>
    );
};

export default RunningCampaign;