import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({campaign}) => {
    const {_id, title, image, type, description, minDonation, deadline, name, email} = campaign

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className='h-[250px] lg:h-[280px] xl:h-[350px]' src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title lg:text-2xl">{title}</h2>
                <p className='font-normal'>{description}</p>
                <p>Deadline: {deadline}</p>
                <div className="card-actions justify-end">
                    <Link to={`/campaign/${_id}`} className="btn btn-primary">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;