import styled from 'styled-components';
import interiorImg from '../../../img/interior.jpg';
import coolFood from '../../../img/coolFood.jpg';

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 50vh;
    background: radial-gradient(white 0%, hsla(50deg, 30%, 80%, 1) 100%);
    justify-content: center;
    align-items: center;

    @media all and (max-width: 800px){
        height: auto;
    }
`

export const WrapperBlock = styled.div`
    z-index:2;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 4px 50px black;

    @media all and (max-width: 800px){
        grid-template-columns: 2fr 3fr;
        width: 100%;
        z-index:1;
    }
    
    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
        width: 100%;
        z-index:1;
    }
`

export const Block = styled.div`
    background: radial-gradient(white 0%, hsla(50deg, 30%, 80%, 1) 100%);
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    padding: 2rem;
    text-align: center;
`

export const BigBlockImg = styled(Block)`
    background: url(${interiorImg});
    background-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const SmallBlockImg = styled(Block)`
    background: url(${coolFood});
    background-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media all and (max-width: 500px){
        display: none;
    }
`

export const ButtonReservation = styled.button`
    font-family: 'Lato', sans-serif;
    padding: 0.5rem;
    min-height: 40px;
    color: var(--mainColor);
    background: none;
    font-size: 1.2rem;
    border: 1px solid var(--mainColor);
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background: var(--mainColor);
        color: white;
        box-shadow: 0px 3px 20px grey;
    }

    &:focus{
        outline: none;
    }
`