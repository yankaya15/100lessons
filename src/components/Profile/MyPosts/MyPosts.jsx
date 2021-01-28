import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>);
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