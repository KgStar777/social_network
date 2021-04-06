import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";
import man from "../../assets/images/logo/duck2.png"
import login from "../../assets/icons/Login.png"

const Header = (props) => {
    return <header className='header'>
        <img className='header__image' src={man}/>
        <div className="loginBlock">
            {props.isAuth
                ? <div>{props.login}
                    <img/>
                    <button onClick={props.logout}
                            className="btn">Log out</button>
                </div>
                : <div>
                    {/*<img src={login}/>*/}
                    <NavLink className='header__login' to={'/login'}>Login</NavLink>
                </div>}

        </div>
    </header>
}

export default Header;