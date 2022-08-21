import styled from "styled-components";

export const Container = styled.div`
    background-color: #202225;
    height: 60px;
    width: calc(100% - 4em);
    display: flex;
    padding: 0 2em;
    align-items: center;
    justify-content: space-between;

    img {
        height: 40px;
        width: 40px;
        border-radius: 100px;
        cursor: pointer;
    }

`

export const Options = styled.div`
    display: flex;
    gap: 1em;

    svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    @media (max-width: 920px) {
        gap: 2em;
    }
`