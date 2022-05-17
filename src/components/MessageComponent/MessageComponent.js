import classes from "./MessageComponent.module.css";
import {useMessages} from "../../contexts/MessagesProvider";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/slices/userSlice";

const MessageComponent = ({message}) => {
    const {deletePost} = useMessages()
    const user = useSelector(userSelector)
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
