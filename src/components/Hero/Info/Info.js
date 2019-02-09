import React from 'react';
import {Wrapper, WrapperBlock, Block, SmallBlockImg, BigBlockImg} from './InfoStyled';


export const InfoSection = props => {
    return (
        <Wrapper>
            <WrapperBlock>
                <Block></Block>
                <BigBlockImg></BigBlockImg>
                <SmallBlockImg></SmallBlockImg>
                <Block></Block>
            </WrapperBlock>
        </Wrapper>
    );
};

// style={{backgroundImage:`url(${interiorImg})`}}