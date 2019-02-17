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
                    handleChange={props.handleChange}
                    handleInputChange={props.handleInputChange}
                        name={props.name}
                        email={props.email}
                        phone={props.phone}
                        message={props.message}
                    handleSubmit={props.handleSubmit}
                    buttonDisabled={props.buttonDisabled}
                    nameVal={props.nameVal}
                    phoneVal={props.phoneVal}
                    emailVal={props.emailVal}
                    messageVal={props.messageVal}
                    handleCurrentValidation={props.handleCurrentValidation}/>
                <ContactMap />
            </ContactWrapper>
        </div>
    );
};

export default Contact;