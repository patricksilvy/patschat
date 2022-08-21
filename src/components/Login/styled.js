import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    overflow: hidden;
`

export const Text = styled.p`
    font-size: clamp(0.8em, 1em + 1vw, 1.5em);
    text-align: center;
`

export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5em;
    border: solid 2px #5865F2;
    background-color: #36393f;
    border-radius: 20px;
    color: white;
    font-size: clamp(0.2em, 0.8em + 1vw, 1.5em);
    padding: 5px 20px;
    transition: 0.3s ease background;
    cursor: pointer;

    &:hover {
        background-color: #5865F2;
    }
`