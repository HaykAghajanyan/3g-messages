import classes from './PostCreator.module.css'
import {useState} from "react";
import {useMessages} from "../../contexts/MessagesProvider";

const PostCreator = () => {
    const [postText, setPostText] = useState('')

    const {sendPost} = useMessages()

    const handlePostSending = () => {
        sendPost(postText, 'Karen')
        setPostText('')
    }

    const handleTextArea = e => {
        setPostText(e.target.value)
    }

    return (
        <div className={classes.newPost}>
            <p>Write your post</p>
            <div className={classes.newPostInput}>
                <textarea
                    value={postText}
                    onChange={handleTextArea}
                    className={classes.newPostArea}
                />
            </div>
            <button onClick={handlePostSending}>Post</button>
        </div>
    )
}

export default PostCreator
