import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5em;

    h1 {
        font-size: clamp(1em, 1em + 1vw, 1.5em);
        text-align: center;
    }

    button {
        border: none;
        border-radius: 20px;
        color: white;
        background-color: #5865F2;
        font-size: clamp(1em, 0.8em + 1vw, 1.5em);
        height: 50px;
        padding: 5px 20px;
        
    }
`