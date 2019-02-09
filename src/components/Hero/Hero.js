import React from 'react';
import SplitText from 'react-pose-text';
import {Title, Subtitle, Header} from './HeroStyle';
import {InfoSection} from './Info/Info';
import SpecialitiesSection from './Specialites/Specialities';

const charPoses = {
    enter: {
        opacity: 1,
        y: 0,
        delay: ({charIndex}) => charIndex*30
    },
    exit: {
        opacity: 0,
        y: 20
    }
}

const Hero = props => {
    return (
        <React.Fragment>
            <Header>
                <Title initialPose="exit" pose="enter">
                    <SplitText charPoses={charPoses}>Good Meal</SplitText>
                </Title>
                <Subtitle initialPose="exit" pose="enter">
                <SplitText charPoses={charPoses}>FEEL LIKE AT HOME</SplitText>
                </Subtitle>
            </Header>
            <InfoSection />
            <SpecialitiesSection />
        </React.Fragment>
    );
};

export default Hero;