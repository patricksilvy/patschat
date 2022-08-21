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
    // user: O auth.Userse logado, ou null se não
    // loading: A booleanpara indicar se o estado de autenticação ainda está sendo carregado
    const [openSidebar, setOpenSidebar] = useState(true)
    const [openAddContact, setOpenAddContact] = useState(false)
    const [userChat, setUserChat] = useState(null)
    
    useEffect(() => {
        if(user) {
            db
                // collection é a função que busca a coleção no db
                .collection('users')
                // doc adiciona um novo documento
                .doc(user.id).set({
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
            openAddContact={openAddContact}
            setOpenAddContact={setOpenAddContact}
        />
        <Chat userChat={userChat}/>
    </Container>
}

export default App