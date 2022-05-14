import {NavLink} from "react-router-dom";
import classes from "./Messages.module.css";
import PostCreator from "../PostCreator/PostCreator";
import {useMessages} from "../../contexts/MessagesProvider";
import {useUserInfo} from "../../contexts/UserProvider";
import MessageComponent from "../MessageComponent/MessageComponent";

const Messages = () => {
    const {messagesData} = useMessages()
    const {user} = useUserInfo()

    return (
        <main>
            {user && <PostCreator/>}
            {
                messagesData.map(message => {
                    return (
                        <NavLink className={classes.link} key={message.id} to={`${message.id}`}>
                            <MessageComponent message={message} />
                        </NavLink>
                    )
                })
            }
        </main>
    )
}

export default Messages
