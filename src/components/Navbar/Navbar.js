import React, { Component } from 'react';
import {Wrapper, Logo, Nav, NavItem, MobileMenu, MobileMenuWrapper} from './NavbarStyle';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal';
import posed from 'react-pose';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: window.innerWidth > 850 ? true : false
        }
    }
    handleClick =()=>{
        this.setState({
            open: !this.state.open
        })
    }

    handleResize =()=>{
        this.setState({
            open: window.innerWidth > 850 ? true : false
        })
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <NavbarContent handleClick={this.handleClick} open={this.state.open}/>
        );
    }
}

export default Navbar; 


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
            <MobileMenuWrapper>
                <MobileMenu 
                    onClick={props.handleClick}
                    open={props.open} />
            </MobileMenuWrapper>
            <Nav 
                open={props.open}
                style={{transform: `translateX(${props.open ? 0 : '100%'})`}}>
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




