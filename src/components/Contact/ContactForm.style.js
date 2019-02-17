import styled from 'styled-components';

export const Wrapper = styled.div``
export const Title = styled.h2``
export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 400px;
`
export const Name = styled.input`
    grid-column: 1/-1;
    ${props => props.nameVal ? null : 'background: red'};
`
export const Email = styled.input`
    grid-column: 1/2;
    ${props => props.emailVal ? null : 'background: red'};
`
export const Phone = styled.input`
    grid-column: 2/-1;
    ${props => props.phoneVal ? null : 'background: red'};
`
export const Message = styled.input`
    grid-column: 1/-1;
    ${props => props.messageVal ? null : 'background: red'};
`
export const Button = styled.button`
grid-column: 1/-1;
`
export const Permission = styled.div`
grid-column: 1/-1;
`
