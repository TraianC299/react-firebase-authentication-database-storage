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



const UpdateProfile = () => {

    const emailRef=useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const {currentUser, updateEmail, updatePassowrd} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        setError("")
        const promises=[]
        if (emailRef.current.value!==currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value){
            promises.push(updatePassowrd(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            history.push("/")
        }).catch(()=>{
            setError("Failed to update your email or password")
        }).finally(()=>{
            setLoading(false)
        })
    }


    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <H>Update Profile</H>
                {error && <P>{error}</P>}
                <Input defaulValue={currentUser.email} type="email" ref={emailRef}></Input>
                <Input placeholder="Leave blank to keep the same" type="password" ref={passwordRef}></Input>
                <Input placeholder="Password Confirmation" type="password" ref={passwordConfirmationRef}></Input>
                <Button disabled={loading} type="submit">Update Profile</Button>
                <Link to="/">Cancel</Link>
            </Form>
        </div>
    )
}

export default UpdateProfile
