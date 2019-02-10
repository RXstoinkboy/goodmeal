import SplitText from 'react-pose-text';
import {Title, Subtitle, Header} from './HeroStyle';
import InfoSection from './Info/Info';
import {Specialities} from './Specialites/Specialities';
import Menu from './Menu/Menu';

import React, { Component } from 'react';

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
            transform: 0
        }
    }
    
    handleScroll =()=>{
        const height = window.scrollY;
        window.requestAnimationFrame(()=>{
            this.setState({
                transform: (0.05 * height)
            })
        })
        
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    

    render() {
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

        return (
            <Content charPoses={charPoses} transform={this.state.transform}/>
        );
    }
}

export default Hero;

const Content = props => {
    return (
        <React.Fragment>
            <Header style={{backgroundPosition: `50% ${props.transform}%`}}>
                <Title initialPose="exit" pose="enter">
                    <SplitText charPoses={props.charPoses}>Good Meal</SplitText>
                </Title>
                <Subtitle initialPose="exit" pose="enter">
                <SplitText charPoses={props.charPoses}>FEEL LIKE AT HOME</SplitText>
                </Subtitle>
            </Header>
            <InfoSection />
            <Specialities />
            <Menu />
        </React.Fragment>
    );
};