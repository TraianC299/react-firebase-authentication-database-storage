import {useState, useEffect} from "react"
import {database} from "../config"

const useDatabase = (collection, email) => {
    const [docs, setDocs] = useState(null)

    useEffect(()=>{
        const unsubscribe=
        database.collection(collection)
        .where("email", "==", email)
        .onSnapshot((snap)=>{let documents=[]
            //this snap is the collection at a moment in time, it is an array of documents, you can use the forEach function on it and store the documents inside the docimets variable
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
        return ()=>unsubscribe()
    }, [collection])


    return (docs)
}

export default useDatabase
