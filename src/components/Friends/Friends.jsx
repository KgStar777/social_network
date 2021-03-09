import React from 'react';
import classes from './Friends.module.css';
import unnamed from "../../assets/images/unnamed.jpg";

const FriendsName = (props) => {
    return (
            <div className={classes.item}>
                <div>
                    <img src={ props.photo != null ? props.photo : unnamed }
                         className={classes.friendsImg}/>
                </div>
                <div className={classes.friendsName}>
                    { props.namesItem }
                </div>
            </div>
    )
}

const Friends = (props) => {
    let friendsElement = props.friends.map(i => <FriendsName namesItem={i.name}/>);
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