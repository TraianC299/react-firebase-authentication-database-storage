import React, {useEffect} from 'react'
import useStorage from "../firebase/hooks/useStorage"

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    
    useEffect(()=>{
        if(url)
        setFile(null)
    },[url, setFile])

    return (
        <div style={{
            width: progress+"%",
            height: "5px",
            background: "rgb(207, 172, 240)",
            marginTop: "20px"
        }}>
            
        </div>
    )
}

export default ProgressBar
