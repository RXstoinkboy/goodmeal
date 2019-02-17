import React from 'react';
import {Wrapper, Title, Form, Button,Permission, Name, Email, Phone, Message} from './ContactForm.style';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const ContactForm = props => {
    return (
        <Wrapper>
            <Title>contact form</Title>
            <Form
                onSubmit={props.handleSubmit}>
                <Name 
                    type='text'
                    name='name'
                    value={props.name}
                    onChange={props.handleInputChange}
                    placeholder='name and surname'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit} />
                <Email 
                    type='email'
                    name='email'
                    value={props.email}
                    onChange={props.handleInputChange}
                    placeholder='youremail@example.com'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit} />
                <Phone 
                    type='text'
                    name='phone'
                    value={props.phone}
                    onChange={props.handleInputChange}
                    placeholder='ex: 0090-9000-900-90'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit} />
                <Flatpickr
                    value={props.currentDate}
                    onChange={props.handleChange}
                    options={{minDate: props.currentDate}}
                    style={{margin:'0'}} />
                <Message 
                    type='text'
                    name='message'
                    value={props.message}
                    onChange={props.handleInputChange}
                    placeholder='please write your message here'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit} />
                <Button 
                    type='submit'
                    disabled={props.buttonDisabled}
                    buttonDisabled={props.buttonDisabled}>
                    submit
                </Button>
                <Permission>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore ipsam molestiae cumque natus repudiandae harum perspiciatis vel animi rem aperiam in, laudantium, quaerat adipisci alias perferendis eum recusandae. Impedit dolores similique, repellat nobis in alias aliquid eveniet non, quibusdam quo nisi, ad quos. Alias voluptatibus incidunt eveniet eius delectus! Ea molestias suscipit est at a? Voluptatibus ratione quas architecto!</Permission>
            </Form>
        </Wrapper>
    );
};

export default ContactForm;