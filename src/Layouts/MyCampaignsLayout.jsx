import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';

const MyCampaignsLayout = () => {
    const loadedCampaigns = useLoaderData()
    const [campaigns, setCampaigns] = useState(loadedCampaigns)
    console.log(campaigns)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaigns/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Campaign has been deleted successfully.",
                                icon: "success"
                            });
                            const remaining = campaigns.filter(user => user._id !== id)
                            setCampaigns(remaining)
                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className="min-h-screen overflow-x-auto w-[85%] mx-auto my-20 h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <h2 className="card-title text-3xl lg:text-5xl my-14"> 
                    <Typewriter
                        words={['My Campaigns', 'My Campaigns']}
                        loop={10}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
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
                                <td className='space-x-5 flex flex-row'>
                                    <Link to={`/updateCampaign/${campaign._id}`} className="btn btn-primary btn-sm md:btn-md">Update</Link>
                                    <button onClick={() => handleDelete(campaign._id)} className="btn btn-primary btn-sm md:btn-md">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaignsLayout;