import React, { Component } from 'react';
import Button from './Button';
import {Wrapper, WrapperBlock, Block, SmallBlockImg, BigBlockImg} from './InfoStyled';
import Modal from '../Modal/Modal';
import Fade from 'react-reveal/Fade';

class InfoSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            date: new Date(),
            currentDate: '',
        }
    }
    handleClick =()=>{
        this.setState({
            open: !this.state.open
        })
    }

    handleChange =(date)=>{
        this.setState({date});
    }

    componentDidMount(){
        const pickDate =()=> {
            const day=`${new Date().getDate()}`;
            const month=( (new Date().getMonth())+1 < 10 ? `0${(new Date().getMonth())+1}` : `${(new Date().getMonth())+1}` );
            const year= `${1900 + new Date().getYear()}`;
            this.setState({
                currentDate: `${year}-${month}-${day}`
            })
        }
        pickDate();

        window.addEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <Info 
                currentDate={this.state.currentDate} 
                open={this.state.open} 
                handleChange={this.handleChange} 
                handleClick={this.handleClick}/>
        );
    }
}

export default InfoSection;

const Info =props=>{
    const { currentDate } = props;
    let modal = props.open ? <Modal handleChange={props.handleChange} currentDate={currentDate} handleClick={props.handleClick} /> : null;

    return(
    <Wrapper>
                <WrapperBlock>
                        <Block>
                            <h1 style={{fontFamily: '"Kaushan Script", cursive'}}>Reservation</h1>
                            <p style={{fontFamily: "'Lato', sans-serif", margin: '1rem 0'}}>Please call us to book a table or use our contact form in order to reach us. We'll be happy to meet you!</p>
                            <Button handleClick={props.handleClick} text='Book a table'/>
                        </Block>
                        <SmallBlockImg />
                    <Fade left>
                        <BigBlockImg />
                    </Fade>
                    <Fade bottom>
                    <Block>
                        <h1 style={{fontFamily: '"Kaushan Script", cursive'}}>About</h1>
                        <p style={{fontFamily: "'Lato', sans-serif", margin: '1rem 0'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non dolorem corporis ratione nostrum natus? Voluptatibus sit animi laboriosam quidem maiores officiis fugiat, quo tempora voluptatum culpa veniam dolorem beatae velit eum, modi explicabo rerum natus ea consectetur itaque quod illo? Incidunt provident id obcaecati porro et ab accusantium inventore?
                        </p>
                    </Block>
                    </Fade>
                </WrapperBlock>
            {modal}
        </Wrapper>
    )
}