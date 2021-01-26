import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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
                <Dialog name='Iryna' id='1'/>
                <Dialog name='Alexander' id='2'/>
                <Dialog name='Makar' id='3'/>
                <Dialog name='Zoya' id='4'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How your Health'/>
                <Message message='So'/>
            </div>
        </div>
    )
}

export default Dialogs;