import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CampaignsLayout = () => {
    const campaigns = useLoaderData()

    return (
        <div>
            <div className="overflow-x-auto w-[85%] mx-auto my-20">
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
                                <td>
                                <Link to={`/campaign/${campaign._id}`} className="btn btn-primary">See More</Link>
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