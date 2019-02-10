import {SpecialitiesWrapper, Photo, Middle, WrapperBlock, Container} from './SpecialitiesStyle';
import {Subtitle} from '../HeroStyle';
import React, { Component } from 'react';
import speciality1 from '../../../img/speciality1.jpg';

export class Specialities extends Component {
    render() {
        return (
            <SpecialitiesSection></SpecialitiesSection>
        );
    }
}

const SpecialitiesSection =props=> {
    return (
        <SpecialitiesWrapper>
            <Photo top>
                <Subtitle>our specialities</Subtitle>
            </Photo>
            <Middle>
                <WrapperBlock>
                    <Container>1</Container>
                    <Container photo={speciality1}/>
                    <Container>2</Container>
                    <Container photo={speciality1}/>
                    <Container photo={speciality1}/>
                    <Container>3</Container>
                    <Container photo={speciality1}/>
                    <Container>4</Container>
                </WrapperBlock>
            </Middle>
            <Photo />
        </SpecialitiesWrapper>
    );
};