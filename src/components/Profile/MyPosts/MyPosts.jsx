import s from './MyPosts.module.css'
import Post from "./Post/Post";

let postData = [
    { id: 1, message:'Hi, how are you', likesCount:4 },
    { id: 2, message:'It\'s my first post', likesCount:12}
]


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
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
    </div>
}

export default MyPosts;