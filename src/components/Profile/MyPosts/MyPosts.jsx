import s from './MyPosts.module.css'
import Post from "./Post/Post";

let posts = [
    { id: 1, message:'Hi, how are you', likesCount:4 },
    { id: 2, message:'It\'s my first post', likesCount:12}
]

let postsElement = posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>);

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
        {postsElement}
    </div>
}

export default MyPosts;