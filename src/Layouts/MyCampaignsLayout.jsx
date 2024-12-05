import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
            <div className="overflow-x-auto w-[85%] mx-auto my-20">
                <h2 className="card-title text-3xl lg:text-5xl my-14">
                    My Campaigns
                </h2>
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
                                <td className='space-x-5'>
                                    <Link to={`/updateCampaign/${campaign._id}`} className="btn btn-primary">Update</Link>
                                    <button onClick={() => handleDelete(campaign._id)} className="btn btn-primary">Delete</button>
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