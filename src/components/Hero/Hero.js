import SplitText from 'react-pose-text';
import {Title, Subtitle, Header, ParallaxImage} from './HeroStyle';
import InfoSection from './Info/Info';
import {Specialities} from './Specialites/Specialities';
import Menu from './Menu/Menu';
import heroImg from '../../img/hero.jpg';

import React, { Component } from 'react';

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
            transform: 0,
        }
    }
    handleScroll =()=>{
        const height = window.scrollY;
        window.requestAnimationFrame(()=>{
            this.setState({
                transform: (0.5 * height).toFixed(0)
            })
        })
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
        console.log('hero')
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
            <Content 
                charPoses={charPoses} 
                transform={this.state.transform} 
                color={this.props.color} 
                handleColor={this.props.handleColor}
                currentDate={this.props.currentDate}
                date={this.props.date}
                handleChange={this.props.handleChange}/>
        );
    }
}

export default Hero;

const Content = props => {
    return (
        <React.Fragment>
            <Header>
                <ParallaxImage src={heroImg} style={{transform: `translateY(${props.transform}px)`}} />
                <Title initialPose="exit" pose="enter">
                    <SplitText charPoses={props.charPoses}>Good Meal</SplitText>
                </Title>
                <Subtitle initialPose="exit" pose="enter">
                <SplitText charPoses={props.charPoses}>FEEL LIKE AT HOME</SplitText>
                </Subtitle>
            </Header>
            <InfoSection 
                color={props.color} 
                handleColor={props.handleColor}
                currentDate={props.currentDate}
                date={props.date}
                handleChange={props.handleChange}/>
            <Specialities transform={props.transform}/>
            <Menu />
        </React.Fragment>
    );
};