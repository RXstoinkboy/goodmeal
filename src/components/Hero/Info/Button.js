import {ButtonReservation} from './InfoStyled';
import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <ButtonReservation onClick={this.props.handleClick}>
                Book a table
            </ButtonReservation>
        );
    }
}

export default Button;