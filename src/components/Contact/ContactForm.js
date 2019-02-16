import React from 'react';
import {Wrapper, Title, Form, Name,Mail,Phone,Message,Button,Permission} from './ContactForm.style';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const ContactForm = props => {
    return (
        <Wrapper>
            <Title>contact form</Title>
            <Form>
                <Name placeholder='name and surname' />
                <Mail placeholder='youremail@example.com'/>
                <Phone placeholder='ex: 0090-9000-900-90' />
                <Flatpickr 
                        style={{marginBottom: '2rem'}}
                        value={props.currentDate}
                        onChange={props.handleChange}
                        options={{minDate: props.currentDate}} />
                <Message placeholder='please write your message here' />
                <Button type='submit'>submit</Button>
                <Permission />
            </Form>
        </Wrapper>
    );
};

export default ContactForm;