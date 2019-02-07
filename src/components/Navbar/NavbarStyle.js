import styled from 'styled-components';
import {Title, Subtitle} from '../Hero/HeroStyle';

export const Wrapper = styled.div`
    width: 100%;
    height: 6rem;
    position: absolute;
    z-index:100;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`

export const NavItem = styled.a`
    color: white;
    margin-right: 1rem;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    padding: 1rem;
    text-transform: uppercase;
    cursor: pointer;
`