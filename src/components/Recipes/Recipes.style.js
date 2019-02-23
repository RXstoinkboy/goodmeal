import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(75deg, hsl(15deg, 20%, 8%), hsl(15deg, 20%, 5%))
`

export const SearchBar = styled.input`
    border: 1px solid var(--secondaryColor);
    padding: 1rem 2rem;
    font-size: 1rem;
    background: transparent;
    color: var(--mainColor);

    &:focus{
        outline: none;
    }
`

export const Results = styled.div`

`

export const SearchButton = styled.button`
    padding: 1rem;
`