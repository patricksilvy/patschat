import React from "react"
import { Container } from './style'
import SidebarChats from '../SidebarChats'
import SidebarHeader from '../SidebarHeader'

const Sidebar = () => {
    return <Container>
        <SidebarHeader/>
        <SidebarChats/>
    </Container>
}

export default Sidebar