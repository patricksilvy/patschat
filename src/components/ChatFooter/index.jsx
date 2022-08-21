import React, {useState} from "react";
import {db, auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import firebase from "firebase/compat/app";
import { Container, FormMessage, MessageInput, SendButton } from './style'
import { AiOutlineSend } from 'react-icons/ai'

const ChatFooter = ({chatId}) => {
    const [user] = useAuthState(auth)
    const [message, setMessage] = useState("")

    const handleSendMessage = e => {
        e.preventDefault()

        db.collection("chats").doc(chatId).collection("messages").add({
            message: message,
            user: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage("")
    }

    return <Container>
        <p><strong>user</strong> Digitando...</p>
        <FormMessage onSubmit={handleSendMessage}>
            <MessageInput 
                placeholder="Mensage..."
                onChange={e => setMessage(e.target.value)}
                value={message}
                type="text"
            />
            <SendButton onClick={handleSendMessage}>
                <AiOutlineSend/>
            </SendButton>
        </FormMessage>
    </Container>
}

export default ChatFooter