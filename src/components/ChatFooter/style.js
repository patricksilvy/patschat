import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #36393F;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px 0;

    p {
        width: 100%;
        margin: 0;
        padding: 0 0 0 calc(5% + 10px);
        color: #999;
        font-size: small;
    }
` 

export const MessageInput = styled.input`
    font-size: 14px;
    width: 100%;
    color: #fff;
    background-color: #40444B;
    border: none;
    padding: 10px;
    border-radius: 10px;
    
`

export const FormMessage = styled.form`
    width: 95%;
    display: flex;
    gap: 10px;
    align-items: center;

    ${MessageInput}:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const SendButton = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #40444B;

    svg {
        color: #fff;
    }
`