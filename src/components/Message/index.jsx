import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../firebase"
import {
    Container,
    Line,
    Content,
    MessageText,
    MessageDate
} from './style'

const Message = ({
    user,
    message,
}) => {
    const [userLoginIn] = useAuthState(auth)

    return <Container>
        <Line className={userLoginIn?.email === user ? "me" : ""}>
            <Content>
                <MessageText>{message.message}</MessageText>
                <MessageDate>
                    {new Date(message?.timestamp).toLocaleDateString()}
                </MessageDate>
            </Content>
        </Line>
    </Container>
}

export default Message