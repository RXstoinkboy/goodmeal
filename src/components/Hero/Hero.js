import React from 'react';
import {Title, Subtitle, Header} from './HeroStyle';
import {InfoSection} from './Info/Info';
import SpecialitiesSection from './Specialites/Specialities';

const Hero = props => {
    return (
        <React.Fragment>
            <Header>
                <Title>
                    good meal
                </Title>
                <Subtitle>
                    feel like at home
                </Subtitle>
            </Header>
            <InfoSection />
            <SpecialitiesSection />
        </React.Fragment>
    );
};

export default Hero;