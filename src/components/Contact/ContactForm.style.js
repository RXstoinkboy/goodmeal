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
`
export const Email = styled(Name)`
    grid-column: 1/2;
`
export const Phone = styled(Name)`
    grid-column: 2/-1;
`
export const Message = styled(Name)`
    grid-column: 1/-1;
`
export const Button = styled.button`
grid-column: 1/-1;
`
export const Permission = styled.div`
grid-column: 1/-1;
`
