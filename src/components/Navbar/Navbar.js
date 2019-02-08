import React from 'react';
import {Wrapper, Logo, Nav, NavItem} from './NavbarStyle';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const navItems = ['recipes', 'news', 'about', 'contact'];
    return (
        <Wrapper>
            <Link to='/'>
                <Logo>good meal</Logo>
            </Link>
            <Nav>
                {navItems.map(item =>
                    <Link to={item} key={item}>
                        <NavItem>{item}</NavItem>
                    </Link>
                )}
            </Nav>
        </Wrapper>
    );
};

export default Navbar;