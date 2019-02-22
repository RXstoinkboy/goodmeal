import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 90vh;
    bottom: 0;
    position: absolute;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    align-items: center;

    @media all and (max-width: 850px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`
