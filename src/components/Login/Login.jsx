import React from 'react';
import classes from "./Login.module.css";
import trumpDuckLogin from '../../assets/images/login/trumpDuckLogin.png'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       validate={[required]}
                       component={Input} />
                {/*field аналог input*/}
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={'input'} /> remember me
            </div>
            <div className={classes.btnWrap}>
                <button>Login</button>
            </div>
        </form>
    )
}

// обертка для формы, как connect
const LoginReduxForm = reduxForm({
    form: 'login' // уникальное имя для формы
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={classes.Login}>
        <h2>Hello, please login</h2>

        <LoginReduxForm onSubmit={onSubmit} />

        <img src={trumpDuckLogin} style={{width: '110px', marginBottom: '10px'}}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} ) (Login);