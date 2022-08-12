import React, { useEffect, Fragment, useState} from "react";
import { auth, db } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth'

import { Container } from './styles/globalStyles'
import GlobalStyle from "./styles/globalStyles";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat'

const App = () => {    
    const [user, loading] = useAuthState(auth)
    const [openSidebar, setOpenSidebar] = useState(true)
    const [userChat, setUserChat] = useState(null)

    useEffect(() => {
        if(user) {
            db.collection('users').doc(user.id).set({
                email: user.email,
                photoURL: user.photoURL
            })
        }
    }, [user])

    if(loading) {
        return <Fragment>
            <GlobalStyle />
            <Loading />
        </Fragment>
    }
    
    if(!user) {
        return <Fragment>
            <GlobalStyle />
            <Login />
        </Fragment>
    }

    return <Container>
        <GlobalStyle />

        <Sidebar  
            userChat={userChat}
            setUserChat={setUserChat}
            openSidebar={openSidebar} 
            setOpenSidebar={setOpenSidebar}
        />
        <Chat userChat={userChat}/>
    </Container>
}

export default App