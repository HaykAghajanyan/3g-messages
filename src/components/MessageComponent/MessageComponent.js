import classes from "./MessageComponent.module.css";
import {useMessages} from "../../contexts/MessagesProvider";
import {useUserInfo} from "../../contexts/UserProvider";
import {useParams} from "react-router-dom";

const MessageComponent = ({message}) => {
    const {deletePost} = useMessages()
    const {user} = useUserInfo()
    // const params = useParams()
    // console.log('params', params)

    return (
        <div className={classes.messageItem} >
            <p>{message.author}</p>
            <p>{message.date}</p>
            <p>{message.text}</p>
            {
                user?.name === message.author &&
                <button onClick={() => deletePost(message.id)}>delete</button>
            }
        </div>
    )
}

export default MessageComponent
