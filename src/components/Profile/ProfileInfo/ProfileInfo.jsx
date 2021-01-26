import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <img className={s.wall} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1dFR0DR4d0wILeQRaH1oo1Dlsag-Gp2dXg&usqp=CAU'/>
            <div className={s.avaDescription}>
                <img src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg'/>
                description
            </div>
        </div>
    )
}


export default ProfileInfo;