import styled from 'styled-components';
import heroImg from '../../img/hero.jpg';



export const Header = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${heroImg});
    background-origin: center;
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;

    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        background: linear-gradient(-45deg, hsla(10, 80%, 10%, .5) 0%, hsla(190, 70%, 10%, .5) 100%);
        top: 0;
        left: 0;
    }
`

export const Title = styled.h1`
    margin: 0;
    font-size: 7rem;
    color: white;
    text-shadow: 1px 1px 10px black;
    font-family: 'Kaushan Script', cursive;
    z-index:2;

    @media all and (max-width: 850px){
        font-size: 4rem;   
    }
`

export const Subtitle = styled.h2`
    margin: 0;
    font-size: 3rem;
    color: white;
    text-shadow: 1px 1px 10px black;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    letter-spacing: .7rem;
    z-index:2;

    @media all and (max-width: 850px){
        font-size: 2rem;
        margin: 0 1rem;   
    }
`