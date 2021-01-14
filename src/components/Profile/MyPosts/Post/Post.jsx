import s from './Post.module.css'
const Post = (props) =>{
    return               <div className={s.item}>
        <img src='https://archilab.online/images/1/123.jpg'/>
        {props.message}
        <div>
            <span>{props.likesCount} Like</span>
        </div>
            </div>
            }

export default Post;