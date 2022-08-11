import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    gap: 2em;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;

    img,
    svg {
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }

    :hover {
        background-color: #40444B;
    }
`

