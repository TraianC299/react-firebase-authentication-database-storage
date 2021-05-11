import React from 'react'
import useDatabase from "../firebase/hooks/useDatabase"
import {useAuth} from "../contexts/AuthContext"

const ImageGrid = ({setSelectedImage}) => {
    
    const {currentUser} = useAuth()
    const docs = useDatabase("images", currentUser.email)

    return (
        docs?
        <div className="Image-Grid">
            {docs && docs.map(doc => <div className="Image-Container" key={doc.id}>
                <img onClick={(e)=>{setSelectedImage(e.target.src)}} src={doc.url}></img>
            </div>)}
        </div>
        :
        <div></div>
    )
}

export default ImageGrid
