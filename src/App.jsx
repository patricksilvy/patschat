import React, { useState, useEffect } from "react"
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore, doc, deleteDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCYQw1sWnV3EtYtnobw3ep15e9Pnb9pYSQ",
    authDomain: "pats-chat.firebaseapp.com",
    projectId: "pats-chat"
});

const App = () => {
    const [name, setName] = useState("")
    const [mensage, setMensage] = useState("")
    const [users, setUsers] = useState([])

    const db = getFirestore(firebaseApp)
    const useCollectionRef = collection(db, 'users')

    const sendMensage = async () => {
        await addDoc(useCollectionRef, {
            name,
            mensage
        })
    }

    const deleteMensage = async ({id}) => {
        const userDoc = doc(db, 'users', id)
        await deleteDoc(userDoc)
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollectionRef)
            const dataArray = data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setUsers(dataArray)
        }
        getUsers()
    })

    return (
        <div>
            <input 
                type="text" 
                placeholder="Nome..." 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Mensagem..." 
                value={mensage}
                onChange={e => setMensage(e.target.value)}
            />
            <button onClick={sendMensage}>
                Enviar Mensagem
            </button>
            <div>
                {users.map(user => (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.mensage}</li>
                        <button onClick={() => deleteMensage({id: user.id})}>Excluir</button>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default App