import styled from 'styled-components';
import specialitiesTop from '../../../img/specialitiesTop.jpg';
import kitchen from '../../../img/kitchen.jpg';

export const Photo = styled.div`
    background: url(${props => props.top ? specialitiesTop : kitchen});
    width: 100vw;
    height: 50vh;
    background-origin: center;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media all and (max-width: 800px){
        display: ${props => props.top ? 'flex' : 'none'};
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

    @media all and (max-width: 800px){
        height: auto
    }
`

export const SpecialitiesWrapper = styled.div`
    display: block; 
    height: 100vh;
    width: 100vw;  
    background: teal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
`
export const Container = styled.div`
    min-width: 250px;
    min-height: 250px;
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
    }
`

export const WrapperBlock = styled.div`
    z-index:2;
    min-width: 800px;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-shadow: 0 4px 50px black;

    @media all and (max-width: 800px){
        grid-template-columns: 1fr 1fr;
        width: 100%;
        z-index:1;
    }

    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

