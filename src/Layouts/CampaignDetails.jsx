import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const CampaignDetails = () => {
    const campaign = useLoaderData()
    const { _id, title, image, type, description, minDonation, deadline, name, email } = campaign

    const handleDonate = () => {
        console.log()
        // send data to the server
        fetch('http://localhost:5000/campaigns', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto my-20">
                <figure className="">
                    <img src={image}
                        alt=""
                        className="rounded-xl w-full" />
                </figure>
                <div className="items-center text-left">
                    <div className='text-left space-y-8'>
                        <h2 className="card-title text-3xl lg:text-5xl my-14">{title}</h2>
                        <p className='text-lg lg:text-xl'>{description}</p>
                        <p className='text-lg lg:text-xl'>{type}</p>
                        <p className='text-lg lg:text-xl'>Minimum Ammount of Donation: {minDonation} </p>
                        <p className='text-lg lg:text-xl'>Deadline: {deadline}</p>
                        <p className='text-lg lg:text-xl'>Campain Creator: {name}</p>
                        <p className='text-lg lg:text-xl'>Contact: {email}</p>
                        <div className="card-actions">
                            <button onClick={() => handleDonate(name, email)} className="btn btn-primary btn-lg">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;