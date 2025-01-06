import React from 'react';
import Banner from '../Components/Banner';
import RunningCampaign from '../Components/RunningCampaign';
import OurImpact from '../Components/OurImpact';
import WhatPeopleSay from '../Components/WhatPeopleSay';
import About from '../Components/About';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <RunningCampaign></RunningCampaign>
            </section>
            <section>
                <WhatPeopleSay></WhatPeopleSay>
            </section>
            <section>
                <OurImpact></OurImpact>
            </section>
        </div>
    );
};

export default HomeLayout;