import React from 'react';
import { Link } from 'react-router-dom';
import CustomAnimation from './CustomAnimation';
import { FaCalendarTimes } from 'react-icons/fa';

const CampaignCard = ({ campaign }) => {
    const { _id, title, image, type, description, minDonation, deadline, name, email } = campaign

    return (
        <CustomAnimation>
            <div className="card bg-gray-100  shadow-dark dark:bg-gray-950 text-gray-900 dark:text-gray-100 h-[550px]">
                <figure className='h-[250px] lg:h-[280px] xl:h-[250px]'>
                    <img className='w-full h-full' src={image} />
                </figure>
                <div className="p-8 space-y-8">
                    <h2 className="card-title lg:text-2xl">{title}</h2>
                    <p className='font-medium'>{description}</p>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center'>
                            <FaCalendarTimes size={30} className='text-[#ff2c64]  inline mr-3' />
                            <p className='text-lg'> {deadline}</p>
                        </div>
                        <Link to={`/campaign/${_id}`} className="text-white uppercase bg-[#ff2c64] px-8 py-3 rounded-3xl">See More</Link>
                    </div>
                </div>
            </div>
        </CustomAnimation>
    );
};

export default CampaignCard;