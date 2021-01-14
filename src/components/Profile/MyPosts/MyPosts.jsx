import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () =>{
    return            <div>
            My Posts
        <div>
        <textarea></textarea>
        <button>Add Post</button>
        </div>
           <Post message='Hi, how are you' likesCount='4'/>
           <Post message="It's my first post" likesCount='1'/>
    </div>
}

export default MyPosts;