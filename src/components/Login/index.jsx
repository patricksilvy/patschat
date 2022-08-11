import React from "react";
import { auth, provider } from "../../firebase";
import { Container } from "./styled";

const Login = () => {
    const handleSingin = () => auth.signInWithPopup(provider).catch(alert)

    return (
        <Container>
            <h1>Faça Login para começar a mandar mensagens...</h1>
            <button onClick={handleSingin}>Login com Google</button>
        </Container>
    )
}

export default Login