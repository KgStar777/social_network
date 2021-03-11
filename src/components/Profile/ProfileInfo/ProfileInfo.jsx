import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    console.log(props);
    return (
        <>
            <div>
                <img src='http://www.accentdialectcoach.com/images/studios/marvel_white.png'/>
            </div>

            <div className={classes.descriptionBlock}>
                <div className={classes.profilePhoto}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <p>{props.profile.aboutMe}</p>
                    <p>Работа: {props.profile.lookingForAJob === true ? 'в поисках' : 'трудоустроен'}</p>
                    <p>{props.profile.lookingForAJob === true ?
                        <p>{props.profile.lookingForAJobDescription}</p> : null}</p>
                    {Object.keys(props.profile.contacts).map((key, i) => {
                        if (props.profile.contacts[key]) {
                            return <div key={i}>
                                <p className={classes.contactsKey}
                                >{key}:
                                    <span className={classes.contactsName}> {props.profile.contacts[key]}</span>
                                </p>
                            </div>
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;