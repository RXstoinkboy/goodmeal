import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media all and (max-width: 850px){
        grid-template-columns: 1fr;
    }
`