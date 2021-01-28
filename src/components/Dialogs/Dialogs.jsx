import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let dialogs = [
    { id:1, name: 'Iryna'},
    { id:2, name: 'Alexander'},
    { id:3, name: 'Makar'},
    { id:4, name: 'Zoya'}
]

let messages = [
    { id:1, message:'Hi'},
    { id:2, message:'How your Health'},
    { id:3, message:'So'}
]

const Dialog = (props) =>
{
    return(
        <div className={s.dialog + ' ' + s.active}>
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

let dialogsElements = dialogs.map (d => <Dialog name={d.name} id={d.id}/>);

let messagesElements = messages.map (m => <Message message={m.message} id={m.id}/>);

const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;