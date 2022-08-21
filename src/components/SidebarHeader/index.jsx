import React from "react";
// import * as EmailValidator from "email-validator";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
import { Container, Options } from './style'
import {
  AiOutlineUserAdd,
  AiOutlineMenuFold,
  AiOutlineUsergroupAdd,
} from "react-icons/ai"

const SidebarHeader = ({ 
  setUserChat, 
  openSidebar, 
  setOpenSidebar ,
  openAddContact,
  setOpenAddContact
}) => {
  const [user] = useAuthState(auth); // Pegar o usuario logado

  // const refChat = db
  //   .collection("chats") // Pega a a coleção chat
  //   .where("users", "array-contains", user.email); // Pega todos os users que pussuam nosso email
  // const [chatsSnapshot] = useCollection(refChat);

  // const handleCreateChat = () => {
  //   const emailInput = prompt("Escreva o e-mail desejado");

  //   if (!emailInput) return;

  //   if (!EmailValidator.validate(emailInput)) {
  //     return alert("E-mail inválido!");
  //   } else if (emailInput === user.email) {
  //     return alert("Insira um e-mail diferente do seu!");
  //   } else if (chatExists(emailInput)) {
  //     return alert("Chat já existe!");
  //   }

  //   db.collection("chats").add({
  //     users: [user.email, emailInput],
  //   });
  // };

  // const chatExists = (emailChat) => {
  //   return !!chatsSnapshot?.docs.find(
  //     (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
  //   );
  // };

  return (
    <Container>
      <img
        referrerPolicy="no-referrer"
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />

      <Options>
        <AiOutlineUserAdd onClick={() => setOpenAddContact(!openAddContact)} />
        <AiOutlineUsergroupAdd />
        <AiOutlineMenuFold onClick={() => setOpenSidebar(!openSidebar)} />
      </Options>
    </Container>
  );
};

export default SidebarHeader;