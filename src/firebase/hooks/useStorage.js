import {useState, useEffect} from "react"
import {storage, database, timestamp} from "../config"
import {useAuth} from "../../contexts/AuthContext"

//this will be a custom hook (reusable chunk of code) that we are gonna use to upload images to firebease storage and return some useful variables like img url

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    const {currentUser} = useAuth()


   
        useEffect(() => {
            // references
            const storageRef = storage.ref(file.name);
            const collectionRef = database.collection('images');
            
            storageRef.put(file).on('state_changed', (snap) => {
              let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
              setProgress(percentage);
            }, (err) => {
              setError(err);
            }, async () => {
              const url = await storageRef.getDownloadURL();
              const createdAt = timestamp();
              const email = currentUser.email
              await collectionRef.add({ url, createdAt, email });
              setUrl(url);
            });
          }, [file]);

    return {progress, url, error}
}


export default useStorage