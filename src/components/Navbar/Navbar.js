import React, { Component } from 'react';
import {Wrapper, Logo, Nav, NavItem, MobileMenu, MobileMenuWrapper} from './NavbarStyle';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal';
import posed from 'react-pose';
import { white } from 'ansi-colors';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: window.innerWidth > 850 ? true : false,
            color: window.location.pathname == '/contact' ? 'black' : 'white'
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

    handleColor =(e)=>{
        const status = e.target.innerText.toLowerCase();
        status === 'contact' 
            ? this.setState({color: 'black'}) 
            : this.setState({color: 'white'}) 
        console.log(window.location.pathname)
    }

    render() {
        return (
            <NavbarContent 
                open={this.state.open} 
                color={this.state.color} 
                handleClick={this.handleClick} 
                handleColor={this.handleColor}/>
        );
    }
}

export default Navbar; 


const NavbarContent =props=> {
    const navItems = ['home', 'recipes', 'news', 'about', 'contact'];
    return (
        <Wrapper>
            <Link 
                to='/'
                onClick={props.handleColor}>
                <Logo color={props.color}>
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
                            <Link 
                                to='/' 
                                key={item} 
                                onClick={props.handleColor} >
                                <NavItem color={props.color}>
                                        {item}
                                </NavItem>
                            </Link>
                        )
                    } else {
                        return (
                            <Link 
                                to={item} 
                                key={item} 
                                onClick={props.handleColor} >
                                <NavItem color={props.color}>
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




