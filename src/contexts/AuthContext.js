import React, {useContext, useState, useEffect} from 'react'
import { useTheme } from 'styled-components'
import {auth} from "../firebase/config"

const AuthContext = React.createContext()
export const useAuth=()=>{
        return useContext(AuthContext)
    }

export const AuthProvider = ({children}) => {
    
    //this is an object that represent our current user, it will be available throuhg all of our application using context
    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logIn(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logOut(email){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassowrd(password){
        return currentUser.updatePassowrd(password)
    }

    useEffect(()=>{
        let unsubscribe=auth.onAuthStateChanged(user=>{
        setCurrentUser(user)
    })
    return unsubscribe
    }, [])
    
    let value={
        currentUser,
        signUp,
        logIn,
        logOut,
        resetPassword,
        updateEmail,
        updatePassowrd
    }
    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )
}


