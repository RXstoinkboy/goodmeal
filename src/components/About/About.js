import React from 'react';
import aboutUs from '../../aboutUs';
import {Wrapper, Section, Photo, ContentWrapper, Title, Content, ScrollDown, ScrollDownWrapper} from './About.style.js'
import Fade from 'react-reveal';

const About = () => {
    return (
        <Wrapper>
            {aboutUs.map((section, idx) => {
                return (
                    <Section key={idx}>
                        <Photo 
                            src={section.picture}
                            alt='picture' />
                        <ContentWrapper>
                            <Title>
                                <Fade left cascade>
                                    {section.title}
                                </Fade>
                            </Title>
                            <Fade>
                                <Content>{section.content}</Content>
                            </Fade>
                        </ContentWrapper>
                        <ScrollDownWrapper>
                            <ScrollDown />
                        </ScrollDownWrapper>
                    </Section>
                )
            })}
        </Wrapper>
    );
};

export default About;