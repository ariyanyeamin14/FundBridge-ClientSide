import React from 'react';
import ImpactCard from './ImpactCard';


const OurImpact = () => {
    return (
        <div id='impact' className='w-[90%] md:w-[85%] mx-auto py-20'>
            <h1 className='text-4xl md:text-5xl font-bold text-center pb-16 leading-normal'>Our Impact in Numbers</h1>
                <div className='grid gap-7'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                        <ImpactCard
                            title={'Total Donations'}
                            number={40500}
                            description={'The total amount of money raised on the platform.'}
                        ></ImpactCard>
                        <ImpactCard
                            title={'Successful Campaigns'}
                            number={347}
                            description={'The total number of campaigns that have achieved their funding goals.'}
                        ></ImpactCard>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                        <ImpactCard
                            title={'Countries Reached'}
                            number={20}
                            description={'The number of countries where campaigns have been launched.'}
                        ></ImpactCard>
                        <ImpactCard
                            title={'Registered Users'}
                            number={1020765}
                            description={' The total number of users who have signed up on the platform.'}
                        ></ImpactCard>
                        <ImpactCard
                            title={'Average Donation'}
                            number={107.22}
                            description={'The average amount donated per contribution.'}
                        ></ImpactCard>
                    </div>
                </div>
        </div >
    );
};

export default OurImpact;