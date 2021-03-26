import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    // console.log(state.friendsPage.friends)
    return {
        friends: state.friendsPage.friends,
    }
}

let mapDispatchToProps = () => {
    return {}
}

// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth) return <Redirect to='/login' />
//     return <ProfileContainer {...props}/>
// }


// контейнерная и презентационная компоненты коннектятся. презентационная получает колбеки
const FriendsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps) (Friends));

export default FriendsContainer;