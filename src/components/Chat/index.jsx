import React from "react";
import ChatHeader from '../ChatHeader'
import ChatBody from '../ChatBody'
import ChatFooter from '../ChatFooter'
import Default from '../Default'
import { Container } from "./style";

const Chat = ({userChat}) => {
    if(!userChat) return <Default />

    return <Container>
        <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name}/>
        <ChatBody chatId={userChat?.chatId} />
        <ChatFooter chatId={userChat?.chatId} />
    </Container>
}

export default Chat