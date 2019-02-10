import {ButtonReservation} from './InfoStyled';
import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <ButtonReservation onClick={this.props.handleClick}>
                {this.props.text}
            </ButtonReservation>
        );
    }
}

export default Button;