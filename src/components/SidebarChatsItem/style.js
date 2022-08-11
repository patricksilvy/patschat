import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    gap: 2em;
    padding-left: 20px;
    width: calc(100% - 20px);
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

