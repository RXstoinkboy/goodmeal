import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;

    @media all and (max-width: 850px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`