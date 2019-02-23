import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: black;
    transform: rotate(0deg);
    animation: ${animate} .3s linear infinite;
`
const animate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Animation = styled.div`
    width: 100px;
    height: 100px;
    background: white;
    animation: ${animate} .3s linear infinite;
`
