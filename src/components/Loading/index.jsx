import React from "react"
import {BallTriangle} from "react-loader-spinner"
import { Container } from "./style"

const Loading = () => {
    return (
        <Container>
            <BallTriangle
                color="white" 
                height={80} 
                width={80}
            /> 
        </Container>
    )
}

export default Loading