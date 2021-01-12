import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () =>{
    return    <div className={s.content}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1dFR0DR4d0wILeQRaH1oo1Dlsag-Gp2dXg&usqp=CAU'></img>
        <div>
            <img src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg'></img>
            description
        </div>
       <MyPosts />
    </div>
}

export default Profile;