import React from 'react';
import Banner from '../Components/Banner';
import RunningCampaign from '../Components/RunningCampaign';
import OurImpact from '../Components/OurImpact';
import WhatPeopleSay from '../Components/WhatPeopleSay';
import About from '../Components/About';
import Volunteers from '../Components/Volunteers';
import Contact from '../Components/Contact';

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
            <section>
                <Volunteers></Volunteers>
            </section>
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default HomeLayout;