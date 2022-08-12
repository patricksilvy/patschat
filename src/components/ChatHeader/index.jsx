import React from "react";
import { Container } from './style'
import { AiOutlineUser } from 'react-icons/ai'

const ChatHeader = ({ photoURL, name }) => {
    return <Container >
        {photoURL ? <img referrerPolicy="no-referrer" src={photoURL} alt="Avatar"/> : <AiOutlineUser/>}
        <h2>{name}</h2>
    </Container>
}

export default ChatHeader