import React from "react"
import { Container, ContainerMin } from './style'
import SidebarChats from '../SidebarChats'
import SidebarHeader from '../SidebarHeader'
import SidebarHeaderMin from "../SidebarHeaderMin"
import { AnimatePresence, motion } from "framer-motion"

const Sidebar = ({
    userChat,
    setUserChat,
    openSidebar,
    setOpenSidebar,
}) => {
    const animations = {
        sidebar: {
            initial:{
                x: "-30vw", 
                opacity: 0, 
                width: "0vw"
            },
            animate: {
                x: 0, 
                opacity: 1,
                width: "30vw"
            },
            exit: {
                x: "-30vw",
                opacity: 0
            }
        },
        sidebarMin: {
            initial: {
                x: "-70px",
                opacity: 0,
                width: "0px"
            },
            animate: {
                x: 0, 
                opacity: 1,
                width: "70px"
            },
            exit:{
                x: "-70px",
                opacity: 0
            }
        },
        transition: {
            ease: "easeInOut", 
            duration: 0.4
        }
    }
    
    return(
        <AnimatePresence exitBeforeEnter="true">
            {openSidebar ? 
                <motion.div
                    key="Sidebar"
                    initial={animations.sidebar.initial}
                    animate={animations.sidebar.animate}
                    exit={animations.sidebar.exit}
                    transition={animations.transition}
                >
                    <Container>
                        <SidebarHeader 
                            setUserChat={setUserChat}
                            openSidebar={openSidebar} 
                            setOpenSidebar={setOpenSidebar}
                        />
                        <SidebarChats 
                            setUserChat={setUserChat} 
                            userChat={userChat}
                            openSidebar={openSidebar} 
                            setOpenSidebar={setOpenSidebar}
                        />
                    </Container>
                </motion.div>   
            :    <motion.div
                    key="SidebarMin"
                    initial={animations.sidebarMin.initial}
                    animate={animations.sidebarMin.animate}
                    exit={animations.sidebarMin.exit}
                    transition={animations.transition}
                >
                    <ContainerMin>
                        <SidebarHeaderMin 
                            openSidebar={openSidebar} 
                            setOpenSidebar={setOpenSidebar}
                        />
                        <SidebarChats 
                            setUserChat={setUserChat} 
                            userChat={userChat}
                            openSidebar={openSidebar} 
                            setOpenSidebar={setOpenSidebar}
                        />
                    </ContainerMin>
                </motion.div>}
        </AnimatePresence>
    )
}

export default Sidebar