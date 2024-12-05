import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import RunningCampaign from '../Components/RunningCampaign';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <RunningCampaign></RunningCampaign>
            </section>
        </div>
    );
};

export default HomeLayout;