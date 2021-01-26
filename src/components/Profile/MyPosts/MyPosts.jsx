import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.myPosts}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <Post message='Hi, how are you' likesCount='4'/>
        <Post message="It's my first post" likesCount='1'/>
    </div>
}

export default MyPosts;