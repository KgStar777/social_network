import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    // console.log(state.friendsPage.friends)
    return {
        friends: state.friendsPage.friends,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = () => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;