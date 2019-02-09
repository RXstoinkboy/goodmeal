import SplitText from 'react-pose-text';
import {Title, Subtitle, Header} from './HeroStyle';
import {InfoSection} from './Info/Info';
import SpecialitiesSection from './Specialites/Specialities';

import React, { Component } from 'react';

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

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
            transform: 0
        }
    }
    
    handleScroll =()=>{
        const height = window.scrollY;
        this.setState({
            transform: (0.5 * height)
        })
        console.log(this.state.transform)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    

    render() {
        return (
            <React.Fragment>
            <Header style={{backgroundPosition: `50% ${this.state.transform}%`}}>
                <Title initialPose="exit" pose="enter">
                    <SplitText charPoses={charPoses}>Good Meal</SplitText>
                </Title>
                <Subtitle initialPose="exit" pose="enter">
                <SplitText charPoses={charPoses}>FEEL LIKE AT HOME</SplitText>
                </Subtitle>
            </Header>
            <InfoSection change={this.state.transform} />
            <SpecialitiesSection />
        </React.Fragment>
        );
    }
}

export default Hero;