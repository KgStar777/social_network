import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {
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

    let state = props.store.getState().dialogsPage;

    let messagesElements = state.messages.map(i => <Message message={i.message}></Message>);
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messagesWrap}>
                <div className={classes.messages}>
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