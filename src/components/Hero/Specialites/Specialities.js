import {SpecialitiesWrapper, Photo, Middle} from './SpecialitiesStyle';
import {Subtitle} from '../HeroStyle';
import React, { Component } from 'react';

export class Specialities extends Component {
    render() {
        return (
            <SpecialitiesSection />
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
                Hello from middle
            </Middle>
            <Photo>
                Hello from bottom
            </Photo>
        </SpecialitiesWrapper>
    );
};