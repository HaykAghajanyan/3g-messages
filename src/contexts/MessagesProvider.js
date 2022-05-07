import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../api/api";

const MessagesContext = createContext(null)

const MessagesProvider = ({children}) => {
    const [messagesData, setMessagesData] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        axios.get(`${baseUrl}/messages`)
            .then(res => {
                setMessagesData(res.data)
            })
            .catch(err => console.log(err))
    }

    const sendPost = (text, author, date = '07.05.2022') => {
        const id = `${author}${text.substr(0, 4)}`
        const obj = {
            author, date, text, id
        }

        axios.post(`${baseUrl}/messages`, obj)
            .then(res => console.log(res))
            .then(() => {
                setMessagesData(prev => [obj, ...prev])
            })
            .catch(err => console.log(err))
    }

    const deletePost = id => {
        axios.delete(`${baseUrl}/messages/${id}`)
            .then(res => console.log(res))
            .then(() => {
                const filteredMessages = messagesData.filter(item => item.id !== id)
                setMessagesData(filteredMessages)
            })
            .catch(err => console.log(err))
    }

    return <MessagesContext.Provider value={{messagesData, sendPost, deletePost}}>
        {children}
    </MessagesContext.Provider>
}

export const useMessages = () => useContext(MessagesContext)

export default MessagesProvider
