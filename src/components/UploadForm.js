import React, {useState} from 'react'
import ProgressBar from "../components/ProgressBar"

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ["image/jpeg", "image/png"]

    const changeHandle = (e) =>{
        let selected = e.target.files[0]
        if (selected&&types.includes(selected.type)){
            setFile(selected)
            setError("")
        }else{
            setFile(null)
            setError("Please Select a passende image")
        }
    }
    return (
        <form>
            <input onChange={changeHandle} type="file"></input>
            <div>{error||"File Selected"}</div>
            {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
        </form>
    )
}

export default UploadForm
