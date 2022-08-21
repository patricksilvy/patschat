import React, { useState } from "react"
import Lottie from "lottie-react"
import EmailValidator from 'email-validator'
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container, Text, FormAddEmail, InputEmail, ButtonAddEmail } from "./style";
import animationData from './animationEmail.json'

const SidebarAddChats = () => {
    const [user] = useAuthState(auth);
    const [valueEmailInput, setValueEmailInput] = useState('')
    const refChat = db
        .collection("chats") // Pega a a coleção chat
        .where("users", "array-contains", user.email); // Pega todos os users que pussuam nosso email
    const [chatsSnapshot] = useCollection(refChat);

    const handleAddEmail = e => {
        e.preventDefault()

        if (!EmailValidator.validate(valueEmailInput)) {
            return alert("E-mail inválido!");
        } else if (valueEmailInput === user.email) {
            return alert("Insira um e-mail diferente do seu!");
        } else if (chatExists(valueEmailInput)) {
            return alert("Chat já existe!")
        }

        db.collection("chats").add({
            users: [user.email, valueEmailInput],
        });

    }

    const chatExists = (emailChat) => {
        return !!chatsSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
        );
    };

    return (
        <Container>
            <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "350px", height: "350px" }}
            />
            <Text>
                Escreva o email do contato que você quer adicionar
            </Text>
            <FormAddEmail onSubmit={handleAddEmail}>
                <InputEmail
                    placeholder="Ex: contato@gmail.com..."
                    onChange={e => setValueEmailInput(e.target.value)}
                    value={valueEmailInput}
                    type="text"
                />
                <ButtonAddEmail onClick={handleAddEmail}>
                    Adicionar Email
                </ButtonAddEmail>
            </FormAddEmail>
        </Container>
    )
}

export default SidebarAddChats