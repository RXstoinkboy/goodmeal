import React from 'react';
import { BlackShade, Wrapper } from './ModalStyle';
import Flatpickr from 'react-flatpickr';
import Button from '../Info/Button';
import 'flatpickr/dist/themes/light.css';

const Modal =props=> {
    return (
        <BlackShade>
            <Wrapper style={{fontFamily:"'Lato', sans-serif"}}>
                <h1 style={{fontFamily: '"Kaushan Script", cursive'}}>Reservation</h1>
                <p>Please call us:</p>
                <p>012-3456-789-901</p>
                <p>or use our reservation form:</p>
                <Flatpickr 
                    style={{marginBottom: '2rem'}}
                    value={props.currentDate}
                    onChange={props.handleChange}
                    options={{minDate: props.currentDate}} />
                <Button handleClick={props.handleClick} text='Close'>{props.children}</Button>
                
            </Wrapper>
        </BlackShade>
    );
};

export default Modal;