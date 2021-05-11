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
    color: white;
    margin: 5px;`

    const H = styled.h2`
    color: white;`



const SignUp = () => {

    const emailRef=useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const {signUp} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history=useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value!==passwordConfirmationRef.current.value){
            return setError("Passwords do not match")
        }
        try{
        setLoading(true)
        setError("")
        await signUp(emailRef.current.value, passwordRef.current.value)
        history.push("/")
            }catch{setError("Failed to create an account")}
        
        setLoading(false)
    }


    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <H>Sign Up</H>
                {error && <P>{error}</P>}
                <Input type="email" ref={emailRef}></Input>
                <Input type="password" ref={passwordRef}></Input>
                <Input type="password" ref={passwordConfirmationRef}></Input>
                <Button disabled={loading} type="submit">Sign Up</Button>
                <P>Already have an account? <Link to="/logIn">Log In</Link></P>
            </Form>
        </div>
    )
}

export default SignUp
