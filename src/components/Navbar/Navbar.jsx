import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <nav className={classes.nav}>
            <div className={classes.item}>
                <img/>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <img/>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <img/>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div className={classes.item}>
                <img/>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <img/>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <img/>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
    </nav>
}

export default NavBar;