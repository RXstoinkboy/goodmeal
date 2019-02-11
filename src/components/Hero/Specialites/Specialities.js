import {SpecialitiesWrapper, Wrapper, Middle, WrapperBlock, Container} from './SpecialitiesStyle';
import {Subtitle, ParallaxImage} from '../HeroStyle';
import React, { Component } from 'react';
import tagiatelle from '../../../img/tagiatelle.jpg';
import sweets from '../../../img/sweets.jpg';
import shells from '../../../img/shells.jpg';
import salmon from '../../../img/salmon.jpg';
import specialitiesTop from '../../../img/specialitiesTop.jpg';
import kitchen from '../../../img/kitchen.jpg';

export class Specialities extends Component {
    render() {
        return (
            <SpecialitiesSection translate={this.props.transform}></SpecialitiesSection>
        );
    }
}

const SpecialitiesSection =props=> {
    return (
        <SpecialitiesWrapper>
            <Wrapper top>
                <ParallaxImage src={specialitiesTop} style={{transform: `translateY(${window.innerWidth >= 850 ? ((props.translate - (window.innerHeight*0.4))*0.6) : 0}px)`}}/>
                <Subtitle>our specialities</Subtitle>
            </Wrapper>
            <Middle>
                <WrapperBlock>
                    <Container>
                        <h1 style={{fontFamily: "'Lato', sans-serif", fontSize: '1.6rem'}}>Tagiatelle</h1>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: "var(--mainColor)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolor!</p>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1.1rem', color: 'var(--secondaryColor)'}}><strong>FROM 15.50 $</strong></p>
                    </Container>
                    <Container photo={tagiatelle}/>
                    <Container>
                        <h1 style={{fontFamily: "'Lato', sans-serif", fontSize: '1.6rem'}}>Cake</h1>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: "var(--mainColor)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolor!</p>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1.1rem', color: 'var(--secondaryColor)'}}><strong>FROM 7.00 $</strong></p>
                    </Container>
                    <Container photo={sweets}/>
                    <Container photo={shells}/>
                    <Container>
                        <h1 style={{fontFamily: "'Lato', sans-serif", fontSize: '1.6rem'}}>Clams</h1>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: "var(--mainColor)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolor!</p>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1.1rem', color: 'var(--secondaryColor)'}}><strong>FROM 45.20 $</strong></p>
                    </Container>
                    <Container photo={salmon}/>
                    <Container>
                        <h1 style={{fontFamily: "'Lato', sans-serif", fontSize: '1.6rem'}}>Salmon</h1>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: "var(--mainColor)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolor!</p>
                        <p style={{fontFamily: "'Lato', sans-serif", fontSize: '1.1rem', color: 'var(--secondaryColor)'}}><strong>FROM 35.50 $</strong></p>
                    </Container>
                </WrapperBlock>
            </Middle>
            <Wrapper>
                <ParallaxImage src={kitchen} style={{transform: `translateY(${(props.translate - (window.innerHeight*0.6))*0.6}px)`}}/>
            </Wrapper>
        </SpecialitiesWrapper>
    );
};