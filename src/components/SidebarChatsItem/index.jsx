import React from "react";
import { db } from '../../firebase'
import { useCollection } from "react-firebase-hooks/firestore";

import { AiOutlineUser} from "react-icons/ai"

import { Container } from "./style"; 

const getUser = (users, userLogger) => 
    users?.filter((user) => user !== userLogger?.email)[0]

const SidebarChatsItem = ({
    id, 
    user,
    users,
    setUserChat,
    active
}) => {
    const [getUserItem] = useCollection(
        db.collection("users").where("email", "==", getUser(users, user))
    )

    const Avatar = getUserItem?.docs?.[0]?.data()
    console.log(Avatar)
    const item = getUser(users, user)

    const hendleNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split("@")[0],
            photoURL: Avatar?.photoURL
        }

        setUserChat(userChat)
    }

    return (
        <Container onClick={hendleNewChat} className={active}>
            {Avatar ? 
                <img src={Avatar?.photoURL} alt="foto de perfil" /> 
                : <AiOutlineUser/>}
            <p>{item.split("@")[0]}</p>
        </Container>
    )
}

export default SidebarChatsItem