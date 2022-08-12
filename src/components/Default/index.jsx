import styled from "styled-components";
import {AiFillWechat} from 'react-icons/ai'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5em;

    svg {
        color: #5865F2;
        width: 100px;
        height: 100px;
    }

    h2 {
        text-align: center;
        width: 80%;
    }
`;

const Default = () => {
    return <Container>
        <AiFillWechat />
        <h2>Selecione ou adicione um contato</h2>
    </Container>
}

export default Default