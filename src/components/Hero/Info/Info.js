import React, { Component } from 'react';
import Button from './Button';
import {Wrapper, WrapperBlock, Block, SmallBlockImg, BigBlockImg} from './InfoStyled';
import Modal from '../Modal/Modal'
import 'flatpickr/dist/themes/dark.css';
import Flatpickr from 'react-flatpickr';

class InfoSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            date: new Date(),
            currentDate: '',
        }
    }
    handleClick =(e)=>{
        this.setState({
            open: !this.state.open
        })
        e.stopImmediatePropagation();
        console.log('click')
    }

    handleChange =(date)=>{
        this.setState({date});
        console.log(this.state.date)
    }

    componentDidMount(){
        const day=`${new Date().getDate()}`;
        const month=( (new Date().getMonth())+1 < 10 ? `0${(new Date().getMonth())+1}` : `${(new Date().getMonth())+1}` );
        const year= `${1900 + new Date().getYear()}`;
        this.setState({
            currentDate: `${year}-${month}-${day}`
        })
        console.log(this.state.currentDate)
    }

    render() {
        let modal = this.state.open ? <Modal handleChange={this.handleChange} currentDate={this.state.currentDate} handleClick={this.handleClick} /> : null;

        const { currentDate } = this.state;
        return (
            <Wrapper>
            <WrapperBlock>
                <Block>
                    <h1 style={{fontFamily: '"Kaushan Script", cursive'}}>Reservation</h1>
                    <p style={{fontFamily: "'Lato', sans-serif"}}>Please call us to book a table or use our contact form in order to reach us. We'll be happy to meet you!</p>
                    <Button handleClick={this.handleClick} text='Book a table'/>
                </Block>
                <BigBlockImg></BigBlockImg>
                <SmallBlockImg></SmallBlockImg>
                <Block>
                    <h1 style={{fontFamily: '"Kaushan Script", cursive'}}>About</h1>
                    <p style={{fontFamily: "'Lato', sans-serif"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non dolorem corporis ratione nostrum natus? Voluptatibus sit animi laboriosam quidem maiores officiis fugiat, quo tempora voluptatum culpa veniam dolorem beatae velit eum, modi explicabo rerum natus ea consectetur itaque quod illo? Incidunt provident id obcaecati porro et ab accusantium inventore?
                    </p>
                </Block>
            </WrapperBlock>
            {modal}
        </Wrapper>
        );
    }
}

export default InfoSection;