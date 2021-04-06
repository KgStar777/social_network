import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength30, maxLengthCreator, required} from "../../utils/validators";

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


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    // if (!props.isAuth) return <Redirect to='./login'/>

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
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}
              className={classes.textWrap}>
            <Field component={Textarea}
                   validate={[required, maxLength100]}
                   name='newMessageBody'
                   placeholder='Enter your message'
                   className={classes.textarea}
            />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;