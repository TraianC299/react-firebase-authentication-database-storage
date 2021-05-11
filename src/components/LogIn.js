import React, {useRef, useState} from 'react'
import styled from "styled-components"
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"

    const Form = styled.form`
    background: #18CE77;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 30vh;
    `

    const Input = styled.input`
    border: 2px solid #0E9A57;
    border-radius: 12px;
    padding: 10px 20px;
    margin: 5px;
    outline: none;`

    const Button = styled.button`
    border: 2px solid #0E9A57;
    border-radius: 12px;
    padding: 10px 20px;
    margin: 5px;
    background: white;
    `

    const P = styled.p`
    text-align: center;
    color: black;
    margin-top: 10px;`

    const H = styled.h2`
    color: white;`



const LogIn = () => {

    const emailRef=useRef()
    const passwordRef = useRef()
    const {logIn} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        try{
        setLoading(true)
        setError("")
        await logIn(emailRef.current.value, passwordRef.current.value)
        history.push("/")
            }catch{setError("Failed to sign in")}
        setLoading(false)
    }


    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <H>Log In</H>
                {error && <P>{error}</P>}
                <Input type="email" ref={emailRef}></Input>
                <Input type="password" ref={passwordRef}></Input>
                <Button disabled={loading} type="submit">Log In</Button>
                <Link to="/forgotPassword">Forgot Password?</Link>
            </Form>
            <P>You don’t have an account? <Link to="/signUp">Sign Up</Link></P>
        </div>
    )
}

export default LogIn
