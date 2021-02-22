import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <>
            <div>
                <img src='http://www.accentdialectcoach.com/images/studios/marvel_white.png'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </>
    )
}

export default ProfileInfo;