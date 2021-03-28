import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import Alien from '../../../assets/images/logo/alien2.png'
import ProfileContainer from "../ProfileContainer";

const ProfileInfo = (props) => {
    console.log(props);
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <div>
                {/*<img src='http://www.accentdialectcoach.com/images/studios/marvel_white.png'/>*/}
                {/*<img src='https://dnevniki.ykt.ru/upload/appearance/2014/10/h_160025_6428.jpg'*/}
                {/*     style={{*/}
                {/*         width: "100%", borderTopLeftRadius: "5px",*/}
                {/*         borderTopRightRadius: "5px"*/}
                {/*     }}/>*/}
            </div>

            <div className={classes.descriptionBlock}>
                <div className={classes.profilePhoto}>
                    {/*{(props.profile.photos.large): <img src={Alien}/> ? <img src={props.profile.photos.large}/>}*/}
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatus status={'Hello'}/>
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