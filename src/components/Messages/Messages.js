import classes from "./Messages.module.css";
import PostCreator from "../PostCreator/PostCreator";
import {useMessages} from "../../contexts/MessagesProvider";

const Messages = () => {
    const {messagesData, deletePost} = useMessages()

    return (
        <main className='messages'>
            <PostCreator/>
            {
                messagesData.map(message => {
                    return (
                        <div className={classes.messageItem} key={message.id}>
                            <p>{message.author}</p>
                            <p>{message.date}</p>
                            <p>{message.text}</p>
                            <button onClick={() => deletePost(message.id)}>delete</button>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Messages
