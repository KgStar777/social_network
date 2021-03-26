import React from 'react';
import classes from "./Login.module.css";
import trumpLogin from '../../assets/images/login/trumpLogin.jpg'

const Login = (props) => {
    return <div className={classes.Login}>
        <h2>Hello, please login</h2>

        <img src={trumpLogin} style={{ width: '110px' }}/>
    </div>
}

export default Login;