import React from 'react'
import {Route, Redirect} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"

const PrivateRoute = ({component: Component, ...rest}) => {

    const {currentUser} = useAuth()
    return (
        <Route {...rest} render={props=>{
                return currentUser? <Component {...props}></Component>
                :
                <Redirect to="/logIn"></Redirect>
            }}>
            
            
        </Route>
    )
}

export default PrivateRoute
