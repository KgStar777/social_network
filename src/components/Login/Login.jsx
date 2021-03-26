import React from 'react';
import classes from "./Login.module.css";
import trumpDuckLogin from '../../assets/images/login/trumpDuckLogin.png'

const Login = (props) => {
    return <div className={classes.Login}>
        <h2>Hello, please login</h2>

        <img src={trumpDuckLogin} style={{ width: '110px', marginBottom: '10px' }}/>
    </div>
}

export default Login;