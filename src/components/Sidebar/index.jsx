import React from "react"
import { Container, ContainerMin } from './style'
import SidebarChats from '../SidebarChats'
import SidebarHeader from '../SidebarHeader'
import SidebarHeaderMin from "../SidebarHeaderMin"

const Sidebar = ({
    openSidebar,
    setOpenSidebar
}) => {
    return(
        openSidebar ? <Container>
            <SidebarHeader openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
            <SidebarChats openSidebar={openSidebar} />
        </Container>
        : <ContainerMin>
            <SidebarHeaderMin openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
            <SidebarChats openSidebar={openSidebar} />
        </ContainerMin>
    )
}

export default Sidebar