import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import CustomAnimation from '../Components/CustomAnimation';
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarTimes, FaDonate, FaHandPointRight } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { MdContactMail } from 'react-icons/md';

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
            fetch('https://fund-bridge-server.vercel.app/donations', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(NewDonations)
            })
                .then(res => res.json())
                .then(data => {
                     (data)
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
            <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto py-20 ">
                <figure className="">
                    <img src={image}
                        alt=""
                        className="rounded-xl w-full" />
                </figure>
                <div className="items-center text-left">
                    <div className='text-left space-y-8'>
                        <h2 className="card-title text-3xl lg:text-5xl my-14">
                            <Typewriter
                                words={[`${title}`, `${title}`]}
                                loop={75}
                                cursor
                                cursorStyle='|'
                                cursorColor="#ff2c64"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h2>
                        <p className='md:text-lg lg:text-xl'>{description}</p>
                        <p className='md:text-lg lg:text-xl'> <FaHandPointRight className='text-[#ff2c64] inline mr-4' />{type}</p>
                        <p className='md:text-lg lg:text-xl'><FaDonate  className='text-[#ff2c64] inline mr-4'  />Minimum Ammount of Donation: {minDonation} </p>
                        <p className='md:text-lg lg:text-xl'>
                        Deadline: {deadline}</p>
                        <p className='md:text-lg lg:text-xl'> <IoIosCreate className='text-[#ff2c64] inline mr-4'/>
                        Campain Creator: {name}</p>
                        <p className='md:text-lg lg:text-xl'> <MdContactMail className='text-[#ff2c64] inline mr-4'/>
                        Contact: {email}</p>
                        <div className="card-actions">
                            <button onClick={() => handleDonate(user.displayName, user.email)} className="text-white  bg-[#ff2c64] px-8 py-3 rounded-3xl">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </CustomAnimation>
    );
};

export default CampaignDetails;