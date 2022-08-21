import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    width: 100%;
    height: 100vh;
    background-color: #292b2f;
    overflow: hidden;
` 

export const Text = styled.p`
    width: 80%;
    font-size: clamp(0.2em, 0.8em + 1vw, 1.5em);
    color: white;
    text-align: center;
` 

export const FormAddEmail = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 80%;
    height: 50%;
    gap: 0.5em;
`

export const InputEmail = styled.input`
    width: 100%;
    font-size: 14px;
    padding: 10px 2.5px;
    border-radius: 10px;
    background-color: #40444B;
    color: #fff;
    border: 0;
    text-align: center;

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const ButtonAddEmail = styled.button`
    padding: 10px 30px;
    background-color: #5865F2;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
`