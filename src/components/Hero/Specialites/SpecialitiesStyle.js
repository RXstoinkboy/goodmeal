import styled from 'styled-components';

export const Wrapper = styled.div`
    background: hsla(0,0%,0%, .5);
    width: 100vw;
    height: 50vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: -1;
    overflow: hidden;

    @media all and (max-width: 850px){
        display: ${props=> props.top ? 'flex' : 'none'};
        height: 200px;
    }
`

export const Middle = styled.div`
    background: white;
    width: 100vw;
    height: 40vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;

    @media all and (max-width: 850px){
        height: auto
    }
`

export const SpecialitiesWrapper = styled.div`
    width: 100vw;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
`
export const Container = styled.div`
    min-width: 250px;
    min-height: 250px;
    max-width: 100vw;
    ${props => props.photo ? `background-image: url(${props.photo})`: `background: var(--mainGrad)`};
    background-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    justify-content: center;
    align-content: center;
    
    @media all and (max-width: 500px){
        display: ${props => props.photo ? 'none' : 'grid'}
        border-bottom: 3px solid var(--mainColor)
    }
`

export const WrapperBlock = styled.div`
    z-index:3;
    min-width: 800px;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-shadow: 0 4px 50px black;

    @media all and (max-width: 850px){
        min-width: auto;
        grid-template-columns: 1fr 1fr;
        width: 100vw;
        z-index:1;
    }

    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

