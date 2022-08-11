import React, { useEffect, Fragment, useState} from "react";
import { auth, db } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth'

import GlobalStyle from "./styles/globalStyles";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";

const App = () => {    
    const [user, loading] = useAuthState(auth)
    const [openSidebar, setOpenSidebar] = useState(true)

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

    return <Fragment>
        <GlobalStyle />

        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
    </Fragment>
}

export default App