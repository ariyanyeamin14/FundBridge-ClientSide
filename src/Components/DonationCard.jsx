import React from 'react';

const DonationCard = ({donation}) => {
    const {_id, title, image, type, description, minDonation, deadline, name, email} = donation

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className='h-[250px] lg:h-[280px] xl:h-[350px]' src={image} />
            </figure>
            <div className="card-body space-y-5">                
                <h2 className="card-title lg:text-2xl">{title}</h2>
                <p className='font-normal'>{description}</p>
                <h2 className="card-title lg:text-xl">My donation ammount: {minDonation} $</h2>
            </div>
        </div>
    )
};

export default DonationCard;