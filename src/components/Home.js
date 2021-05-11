import React, {useState} from 'react'
import styled from "styled-components"
import {useAuth} from "../contexts/AuthContext"
import {useHistory, Link} from "react-router-dom"
import UploadForm from "../components/UploadForm"
import Modal from "../components/Modal"
import ImageGrid from "../components/ImageGrid"

const Home = () => {

    const Div = styled.div`
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    `

    const Button = styled.button`
border: 2px solid #0E9A57;
border-radius: 12px;
padding: 10px 20px;
margin: 5px;
background: white;
    `
    const {currentUser} = useAuth()
    const {logOut} = useAuth()
    const history = useHistory()
    const [selectedImage, setSelectedImage] = useState(null)

     const handleLogOut=async ()=>{
        setError("")
        try{
            await logOut()
            history.push("/logIn")
        }catch{setError("Failed to Log out")}
    }

    const [error, setError] = useState("")

    return (
        <>
        <Div>
            <h1>Dashboard</h1>
            {error && <p>{error}</p>}
            <strong>Email:</strong>{currentUser.email}
            <Button onClick={handleLogOut}>Log Out</Button>
            <Link to="updateProfile"><Button>Update Profile</Button></Link>
            <h1>Publish your photos</h1>
    <UploadForm></UploadForm>
    
    {selectedImage?<Modal setSelectedImage={setSelectedImage} src={selectedImage}></Modal>:null}
        </Div>
        <ImageGrid setSelectedImage={setSelectedImage}></ImageGrid>
        </>
    )
}

export default Home
