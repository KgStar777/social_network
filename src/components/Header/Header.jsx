import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className='header'>
        <img className='header__image'
             src='https://cdn2.iconfinder.com/data/icons/fruits-and-vegetables-silhouette/100/_1____-32-256.png'/>
        <div className="loginBlock">
            {props.isAuth ? <div>{props.login}<img /></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}

export default Header;