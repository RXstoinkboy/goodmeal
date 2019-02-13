import styled from 'styled-components';
import {Title} from '../Hero/HeroStyle';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 6rem;
    position: absolute;
    z-index:100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

export const Logo = styled(Title)`
    font-size: 2rem;
    margin-left: 1rem;
    border-bottom: 2px solid white;
    padding: 0 1rem;

    @media all and (max-width: 850px){
        font-size: 1.5rem;   
    }
`

export const Nav = styled.nav`
    margin-right: 1rem;
    display: flex;

    @media all and (max-width: 850px){
        margin: 0;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
        background: white;
        transition: all .3s ease;
        transform: translateX(100%);
    }
`

export const NavItem = styled.div`
    color: white;
    margin-right: 1rem;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    padding: 1rem;
    text-transform: uppercase;
    cursor: pointer;

    @media all and (max-width: 850px){
        font-size: 2rem;
        color: var(--secondaryColor);
        position: relative;

        &::after{
            content: '';
            background: var(--tertiaryColor);
            position: absolute;
            width: 2rem;
            height: 2px;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`