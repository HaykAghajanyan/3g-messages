import classes from "./Messages.module.css";
import PostCreator from "../PostCreator/PostCreator";
import {useMessages} from "../../contexts/MessagesProvider";
import {useUserInfo} from "../../contexts/UserProvider";

const Messages = () => {
    const {messagesData, deletePost} = useMessages()
    const {user} = useUserInfo()

    return (
        <main className='messages'>
            {user && <PostCreator/>}
            {
                messagesData.map(message => {
                    return (
                        <div className={classes.messageItem} key={message.id}>
                            <p>{message.author}</p>
                            <p>{message.date}</p>
                            <p>{message.text}</p>
                            {user === message.author &&
                            <button onClick={() => deletePost(message.id)}>delete</button>}
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Messages
