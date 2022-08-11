import React from "react";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container, Options } from './style'
import { 
  AiOutlineUserAdd,
  AiOutlineMenuFold,
  AiOutlineUsergroupAdd,
 } from "react-icons/ai"

const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <Container>
        <img 
            src={user?.photoURL}
            onClick={() => [auth.signOut(), setUserChat(null)]}
        />
        
        <Options>
          <AiOutlineUserAdd onClick={handleCreateChat} />
          <AiOutlineUsergroupAdd/>
          <AiOutlineMenuFold/>
        </Options>
    </Container>
  );
};

export default SidebarHeader;