import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder="anything new?"
                       name="newPostText"
                       className={classes.textarea}
                       validate={[required, maxLength10 ]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewReduxPostForm = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm)


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(i =>
            <Post message={i.message} likesCount={i.likesCount}/>
        )

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
                <AddNewReduxPostForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;