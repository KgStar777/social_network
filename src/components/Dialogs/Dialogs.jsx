import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    const DialogItem = (props) => {
        let path = '/dialogs/' + props.id;

        return (
            <div className={classes.dialog}>
                <img/>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
        )
    }
    const Message = (props) => {
        return (
            <>
                <div className={classes.message}>{props.message}</div>
                <p></p>
            </>
        )
    }


    let messagesElements = state.messages.map(i => <Message message={i.message}></Message>);
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to='./login'/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messagesWrap}>
                <div className={classes.messages}>
                    <div className={classes.myMessage}>Hey!</div>
                    {messagesElements}
                    <div className={classes.myMessage}>Ok!</div>
                </div>
                <div className={classes.textWrap}>
                    <textarea value={newMessageBody} //забираем value из props чтобы отображать его значение в textarea
                              onChange={onNewMessageChange} //отслеживаем изменения
                              placeholder='Enter your message'/>
                    <button onClick={ onSendMessageClick } >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;