import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import RunningCampaign from '../Components/RunningCampaign';
import OurImpact from '../Components/OurImpact';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <RunningCampaign></RunningCampaign>
            </section>
            <section>
                <OurImpact></OurImpact>
            </section>
        </div>
    );
};

export default HomeLayout;