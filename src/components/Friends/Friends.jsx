import React from 'react';
import classes from './Friends.module.css';

const FriendsName = (props) => {
    return (
            <div className={classes.item}>
                <div className={classes.friendsImg}></div>
                <div className={classes.friendsName}>
                    { props.namesItem }
                </div>
            </div>
    )
}

const Friends = (props) => {
    let friendsElement = props.state.dialogs.map(i => <FriendsName namesItem={i.name}/>);
    // console.log(props);

    return (
        <div className={classes.wrapper}>
            <div>
                <h3>My Friends</h3>
            </div>
            <div className={classes.friendsWrapper}>
            { friendsElement }
            </div>
        </div>
    )
}
export default Friends;