import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../../firebase"

import SidebarChatsItem from "../SidebarChatsItem"
import { Container } from './style'

const SidebarChats = ({ setUserChat, userChat }) => {
    const [user] = useAuthState(auth)

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email)

    const [chatsSnapshot] = useCollection(refChat)

    return <Container>
        {chatsSnapshot?.docs.map((item, index) => (
            <div key={index}>
                <SidebarChatsItem 
                    id={item.id}
                    users={item.data().users}
                    user={user}
                    setUserChat={setUserChat}
                    active={userChat?.chatId === item.id ? "active": ""}
                />
            </div>
        ))}
    </Container>
}

export default SidebarChats