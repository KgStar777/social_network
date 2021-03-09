import React from 'react'
import classes from "./Users.module.css";
import unnamed from "../../assets/images/unnamed.jpg";

let Users = (props) => {

    //pagesCount OR countOfPages
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.usersWrapper}>
        <div className={classes.selectPageWrapper}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage || classes.unSelectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <div className={classes.userWrapper}>
                        <div className={classes.userPhoto}>
                            <img src={u.photos.small != null ? u.photos.small : unnamed} className={classes.userImg}/>
                        </div>

                        <div className={classes.userWrapperName}>
                            <div className={classes.sectionWrapper}>
                                <div className={classes.userName}>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={classes.sectionWrapper}>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>

                        <div className={classes.sectionWrapper}>
                            {u.follower
                                ? <button className={classes.followBtn}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}> UNFOLLOW </button>
                                : <button className={classes.unFollowBtn}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}> FOLLOW </button>
                            }
                        </div>
                    </div>
                </div>
            )
        }
        {/*<button className={classes.getBtn} onClick={this.getUsers}>GET USERS</button>*/}
    </div>
}

export default Users