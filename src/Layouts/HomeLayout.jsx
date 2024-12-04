import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import RunningCampaign from '../Components/RunningCampaign';

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
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