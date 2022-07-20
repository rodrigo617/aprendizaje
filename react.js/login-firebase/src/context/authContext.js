import { createContext, useContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth'
import { auth } from '../firebase'

export const authContext= createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null)

    const singup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password)
    
    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password)
    
    useEffect(()=> {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    return (
        <authContext.Provider value={{ singup, login, user }}>
            {children}
        </authContext.Provider> 
    )
}