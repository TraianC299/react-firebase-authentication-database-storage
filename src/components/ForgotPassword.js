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
    outline: none;
    `
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
    margin-top: 10px;
    `
    const H = styled.h2`
    color: white;
    margin-bottom: 15px;
    `



const ForgotPassword = () => {

    const emailRef=useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        try{
        setMessage("")
        setLoading(true)
        setError("")
        await resetPassword(emailRef.current.value)
        setMessage("Check your inbox for further instructions")
            }catch{setError("Failed to reset password")}
        setLoading(false)
    }


    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <H>Reset Password</H>
                {error && <P>{error}</P>}{message && <P>{message}</P>}
                <Input placeholder="email" type="email" ref={emailRef}></Input>
                <Button disabled={loading} type="submit">Send Email</Button>
                <Link to="/logIn">Log In</Link>
            </Form>
        </div>
    )
}

export default ForgotPassword
