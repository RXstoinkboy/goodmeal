import styled from 'styled-components';
import interiorImg from '../../../img/interior.jpg';
import coolFood from '../../../img/coolFood.jpg';

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(30deg,rgb(249, 249, 249) 0%,#bfbfbf 100%);
    justify-content: center;
    align-items: center;

    @media all and (max-width: 800px){
        height: auto;
    }
`

export const WrapperBlock = styled.div`
    z-index:2;
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
    height: 300px;
    min-width: 300px;

    @media all and (max-width:800px){
        width: 100%;
        min-width: auto;
    }
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
`