import React from 'react';
import { Link } from 'react-router-dom';
import CustomAnimation from './CustomAnimation';

const CampaignCard = ({ campaign }) => {
    const { _id, title, image, type, description, minDonation, deadline, name, email } = campaign

    return (
        <CustomAnimation>
            <div className="card bg-base-100 shadow-xl dark:shadow-dark dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <figure>
                    <img className='h-[250px] lg:h-[280px] xl:h-[350px]' src={image} />
                </figure>
                <div className="card-body space-y-5">
                    <h2 className="card-title lg:text-2xl">{title}</h2>
                    <p className='font-normal'>{description}</p>
                    <p className='text-lg'>Deadline: {deadline}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/campaign/${_id}`} className="btn btn-primary">See More</Link>
                    </div>
                </div>
            </div>
        </CustomAnimation>
    );
};

export default CampaignCard;