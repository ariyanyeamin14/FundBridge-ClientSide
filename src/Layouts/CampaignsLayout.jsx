import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CampaignsLayout = () => {
    const loadedCampaigns = useLoaderData()
    const [campaigns, setCampaigns] = useState(loadedCampaigns)

    const handleSort = () => {
        fetch("http://localhost:5000/campaigns/sorted")
        .then(res => res.json())
        .then(data => setCampaigns(data))   
    }

    return (
        <div className='w-[85%] mx-auto my-20'>
            <div className='flex justify-between items-center'>
                <h2 className="card-title text-3xl lg:text-5xl my-14">
                    All Campaigns
                </h2>
                <button onClick={() => handleSort()} className='btn btn-primary'>Sort by MinDonation</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Min donation</th>
                            <td>Deadline</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns.map((campaign, index) => <tr key={campaign._id} className="hover">
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