import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    // console.log(props.message)

    return (
        <div className={classes.item}>
            <img src='https://dowerapport.com/assets/celebs/nick_fury_2.jpg' />
            {props.message}
            <div>
                <span className={classes.likes}>like {props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;