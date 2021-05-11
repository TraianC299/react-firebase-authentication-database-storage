import React from 'react'

const Modal = ({src, setSelectedImage}) => {

    //this function will xlose the modal if we click anywhere outside it
    const closeImage = (e) =>{
        if (e.target.tagName=="DIV")
        setSelectedImage(null)
    }

    return (
        <div onClick={closeImage} className="backdrop">
            <img src={src}></img>
        </div>
    )
}

export default Modal
