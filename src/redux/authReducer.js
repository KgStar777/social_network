import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA" //установить пользовательские данные

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

//создаем actionCreater, задача этой функции вернуть объект "action".
// Инкапсуляция. упаковываем объект "action" который будет передоваться через dispatch в reducer
const setAuthUserData = (userId, email, login, isFetching) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isFetching}
})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
}
export default authReducer;