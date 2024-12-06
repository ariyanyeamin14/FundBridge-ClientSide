import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import CustomAnimation from '../Components/CustomAnimation';

const CampaignDetails = () => {
    const { user } = useContext(AuthContex)
    const campaign = useLoaderData()
    const { _id, title, image, type, description, minDonation, deadline, name, email } = campaign

    const handleDonate = () => {
        const donatorName = user.displayName
        const donatorEmail = user.email
        const NewDonations = { title, image, type, description, minDonation, deadline, name, email, donatorName, donatorEmail }
        const currentDate = new Date();
        const deadlineDate = new Date(deadline)

        // send data to the server
        if (deadlineDate < currentDate) {
            Swal.fire({
                icon: "error",
                title: "Campaign Expired",
                text: "The deadline for this campaign has passed. You cannot donate to this campaign anymore.",
            });
        }
        else {
            fetch('http://localhost:5000/donations', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(NewDonations)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your donations added successfully',
                            icon: 'success',
                            confirmButtonText: 'Done'
                        })
                    }
                })
        }
    }
    return (
        <CustomAnimation>
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
                            <button onClick={() => handleDonate(user.displayName, user.email)} className="btn btn-primary btn-lg">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </CustomAnimation>
    );
};

export default CampaignDetails;