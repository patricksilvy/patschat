import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../../firebase"

import SidebarChatsItem from "../SidebarChatsItem"
import SidebarChatsItemMin from "../SidebarChatsItemMin"
import { Container } from './style'

const SidebarChats = ({ setUserChat, userChat, openSidebar, setOpenSidebar }) => {
    const [user] = useAuthState(auth)

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email)

    // Pega os chats que possuem nossos emails
    const [chatsSnapshot] = useCollection(refChat)

    return <Container>
        {chatsSnapshot?.docs.map((item, index) => (
            <div key={index}>
                {openSidebar ? 
                    <SidebarChatsItem 
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active": ""}
                        setOpenSidebar={setOpenSidebar}
                    />
                    : <SidebarChatsItemMin
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active": ""}
                    />
                }
            </div>
        ))}
    </Container>
}

export default SidebarChats