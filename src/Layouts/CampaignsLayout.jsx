import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import CampaignCard from '../Components/CampaignCard';

const CampaignsLayout = () => {
    const loadedCampaigns = useLoaderData()
    const [campaigns, setCampaigns] = useState(loadedCampaigns)

    const handleSort = () => {
        fetch("https://fund-bridge-server.vercel.app/campaigns/sorted")
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }

    return (
        <div className='w-[90%] md:w-[85%] mx-auto py-40'>
            <div className='flex justify-between items-center'>
                <h2 className="card-title text-3xl lg:text-5xl my-14">
                    <Typewriter
                        words={['All Campaign', 'All Campaign']}
                        loop={10}
                        cursor
                        cursorStyle='|'
                        cursorColor='#ff2c64'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <button onClick={() => handleSort()} className='btn bg-[#ff2c64] border-none text-white  btn-primary'>Sort by MinDonation</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    campaigns.map( (campaign, index) => <CampaignCard campaign={campaign} key={index}></CampaignCard> )
                }
            </div>
        </div>
    );
};

export default CampaignsLayout;