import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 35vw;

    @media (max-width: 620px) {
        width: 100vw;
    }
`

export const ContainerMin =  styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 70px;
`