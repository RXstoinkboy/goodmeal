import React from 'react';
import {Wrapper, Logo, Nav, NavItem} from './NavbarStyle';

const Navbar = () => {
    const navItems = ['recipes', 'news', 'about', 'contact'];
    return (
        <Wrapper>
            <Logo>good meal</Logo>
            <Nav>
                {navItems.map(item => 
                    <NavItem>{item}</NavItem>
                )}
            </Nav>
        </Wrapper>
    );
};

export default Navbar;