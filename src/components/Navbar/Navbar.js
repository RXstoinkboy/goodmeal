import React, { Component } from 'react';
import {Wrapper, Logo, Nav, NavItem, MobileMenu, MobileMenuWrapper} from './NavbarStyle';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: window.innerWidth > 850 ? true : false,
            down: false
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

    handleScroll =()=>{
        console.dir('hi')
    }

    clickHandler =()=>{
        if(window.innerWidth < 850){
            this.handleClick()
        }
        this.props.handleColor()
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <NavbarContent 
                open={this.state.open} 
                color={this.props.color} 
                handleClick={this.handleClick} 
                handleColor={this.props.handleColor}
                clickHandler={this.clickHandler}
                />
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
                                onClick={props.clickHandler} >
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
                                onClick={props.clickHandler} >
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




