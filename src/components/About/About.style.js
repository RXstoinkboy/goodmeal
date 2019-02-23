import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(270deg, hsla(0, 0%, 0%, 1), hsla(0, 0%, 10%, 1));
`

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    max-height:110vh;
    background: black;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after{
        position: absolute;
        top:0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(100deg, hsla(0deg, 0%, 0%, 1) 40vw, hsla(0deg, 0%, 0%, 0) 40vw,hsla(0deg, 0%, 0%, .7) 30vw, hsla(0deg, 0%, 0%, 1) 100%);
        content: '';
        z-index:1;
    }

    @media all and (max-width: 850px){
        &::after{
            background: linear-gradient(100deg, hsla(0deg, 0%, 0%, 1) 25rem, hsla(0deg, 0%, 0%, 0) 40vw,hsla(0deg, 0%, 0%, .7) 30vw, hsla(0deg, 0%, 0%, 1) 100%);
        }
    }
    @media all and (max-width: 500px){
        &::after{
            background: black;
        }
    }
`

export const Photo = styled.img`
    background: red;
    height: 100%;
    min-width: 100vw; 
    position: relative;
`

export const ContentWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 70%;
    padding: 40px;
    margin: 20px;
    border-radius: 4px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 4;

    @media all and (max-width: 850px){
        width: 100%;
        padding: 20px;
        margin: 0;
    }
`

export const Title = styled.h1`
    position: relative;
    color: var(--mainColor);
    z-index: 5;
    font-size: 3rem;
    font-family: 'Kaushan script';
`

export const Content = styled.article`
    position: relative;
    color: var(--tertiaryColor);
    z-index: 5;
    font-size: 1.5rem;
    font-family: "Lato";
`
const arrowMovement = keyframes`
    from {
        background: transparent;
        box-shadow: 0px 0px 0 lightgrey, 0px 0px 0 grey;
    }
    to{
        box-shadow: -10px -10px 0 lightgrey, -17px -17px 0 grey;
    }
`
export const ScrollDownWrapper = styled.div`
    position: absolute;
    bottom: 60px;
    width: 60px;
    height: 60px;
    z-index: 40;
    margin: 3px;
    border-radius: 4px;
    background: transparent;
    border-left: 8px solid white;
    border-top: 8px solid white;
    transform: rotate(-135deg);
    animation: ${arrowMovement} 1s linear infinite;
`

export const ScrollDown = styled.div`
    
`
