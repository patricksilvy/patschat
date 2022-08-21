import React from "react";
import { auth, provider } from "../../firebase";
import { Container, LoginButton, Text } from "./styled";
import Lottie from 'lottie-react'
import animationData from './animationLogin.json'
import { FcGoogle } from 'react-icons/fc' 

const Login = () => {
    const handleSingin = () => auth.signInWithPopup(provider).catch(alert)

    return (
        <Container>
            <Lottie 
                animationData={animationData} 
                loop={true} 
                style={{
                    width: "350px",
                    height: "350px",
                    
                }}
            />
            <Text>Faça Login para começar a mandar mensagens</Text>
            <LoginButton onClick={handleSingin}>
                <FcGoogle/>
                Login com Google
            </LoginButton>
        </Container>
    )
}

export default Login