import styled from 'styled-components';
import specialitiesBottom from '../../../img/specialitiesBottom.jpg';
import specialitiesTop from '../../../img/specialitiesTop.jpg';

export const Photo = styled.div`
    background: url(${props => props.top ? specialitiesTop : specialitiesBottom});
    width: 100vw;
    height: 50vh;
    background-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Middle = styled.div`
    background: var(--mainGrad);
    width: 100vw;
    height: 40vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SpecialitiesWrapper = styled.div`
    height: 100vh;
    width: 100vw;  
    background: teal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
`