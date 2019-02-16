import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import {ContactWrapper} from './ContactStyle';

const Contact =props=> {
    return (
        <div style={{
            background: 'white', 
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            display: 'flex', 
            justifyContent:'center', 
            alignItems:'center'}}>
            <ContactWrapper>
                <ContactInfo />
                <ContactForm 
                    currentDate={props.currentDate}
                    handleChange={props.handleChange}/>
                <ContactMap />
            </ContactWrapper>
        </div>
    );
};

export default Contact;