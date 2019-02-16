import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-column: 2/-1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    font-family: 'Lato', sans-serif;
    color: var(--mainColor);
`
export const Title = styled.h1`
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    color: var(--mainColor);
    text-align: center;
`
export const HoursWrapper = styled.div`
    margin: 0 2rem;
`
export const Hours = styled.div`
    display: flex;
    flex-flow: row nowrap; 
`

export const Label = styled.h3`

`
export const Time = styled.p`

`