import React from 'react';
import {Wrapper, Title,HoursWrapper, Hours, Label, Time} from './ContactInfo.style';

const ContactInfo = () => {
    return (
        <React.Fragment>
        <Title>Opening hours</Title>
        <Wrapper>
            <Hours>
                <HoursWrapper>
                    <Label>Mon</Label>
                    <Time>9am:noon</Time>
                </HoursWrapper>
                <HoursWrapper>
                    <Label>Mon</Label>
                    <Time>9am:noon</Time>
                </HoursWrapper>
                <HoursWrapper>
                    <Label>Mon</Label>
                    <Time>9am:noon</Time>
                </HoursWrapper>
            </Hours>
        </Wrapper>
        </React.Fragment>
    );
};

export default ContactInfo;