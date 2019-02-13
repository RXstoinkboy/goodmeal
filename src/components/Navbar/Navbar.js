import React, { Component } from 'react';
import {Wrapper, Logo, Nav, NavItem, MobileMenu} from './NavbarStyle';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal';
import posed from 'react-pose';

const NavbarContent =props=> {
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
            <MobileMenu 
                onClick={props.handleClick}
                open={props.open} />
            <Nav open={props.open}>
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





class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick =()=>{
        this.setState({
            open: !this.state.open
        })
        console.log('click', this.state.open)
    }

    render() {
        return (
            <NavbarContent handleClick={this.handleClick} open={this.state.open}/>
        );
    }
}

export default Navbar; 