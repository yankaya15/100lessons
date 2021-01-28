import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let dialogsData = [
    { id:1, name: 'Iryna'},
    { id:2, name: 'Alexander'},
    { id:3, name: 'Makar'},
    { id:4, name: 'Zoya'}
]

let messageData = [
    { id:1, message:'Hi'},
    { id:2, message:'How your Health'},
    { id:3, message:'So'}
]

const Dialog = (props) =>
{
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;