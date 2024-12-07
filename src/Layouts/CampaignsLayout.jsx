import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const CampaignsLayout = () => {
    const loadedCampaigns = useLoaderData()
    const [campaigns, setCampaigns] = useState(loadedCampaigns)

    const handleSort = () => {
        fetch("http://localhost:5000/campaigns/sorted")
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }

    return (
        <div className='w-[90%] md:w-[85%] mx-auto my-20 min-h-screen'>
            <div className='flex justify-between items-center'>
                <h2 className="card-title text-3xl lg:text-5xl my-14">
                    <Typewriter
                        words={['All Campaign', 'All Campaign']}
                        loop={10}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <button onClick={() => handleSort()} className='btn btn-primary'>Sort by MinDonation</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='dark:text-gray-400'>Title</th>
                            <th className='dark:text-gray-400'>Type</th>
                            <th className='dark:text-gray-400'>Min donation</th>
                            <td className='dark:text-gray-400'>Deadline</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns.map((campaign, index) => <tr key={campaign._id} className="hover dark:hover:text-gray-900">
                                <th>{index + 1}</th>
                                <td className='lg:text-lg'>{campaign.title}</td>
                                <td>{campaign.type}</td>
                                <td>{campaign.minDonation} $</td>
                                <td>{campaign.deadline}</td>
                                <td className='text-right'>
                                    <div className='flex justify-end'>
                                        <Link to={`/campaign/${campaign._id}`} className="btn btn-primary btn-sm md:btn-md">See More</Link>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CampaignsLayout;