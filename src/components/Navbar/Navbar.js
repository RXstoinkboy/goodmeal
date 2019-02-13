import React from 'react';
import {Wrapper, Logo, Nav, NavItem} from './NavbarStyle';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal';

const Navbar = () => {
    const navItems = ['home', 'recipes', 'news', 'about', 'contact'];
    return (
        <Wrapper>
            <Link to='/'>
                <Logo>
                    <Fade top cascade>
                        Good Meal
                    </Fade>
                </Logo>
            </Link>
            <Nav>
                {navItems.map(item => {
                    if (item === 'home') {
                        return (
                            <Link to='/' key={item}>
                                <NavItem>
                                        {item}
                                </NavItem>
                            </Link>
                        )
                    } else {
                        return (
                            <Link to={item} key={item}>
                                <NavItem>
                                        {item}
                                </NavItem>
                            </Link>
                        )
                    }
                }
                
                )}
            </Nav>
        </Wrapper>
    );
};

export default Navbar;