import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//переписано под react-redux
//const rMyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action);
//                     }
//
//                     return (
//                         <MyPosts posts={state.profilePage.posts}
//                                  newPostText={state.profilePage.newPostText}
//                                  updateNewPostText={onPostChange}
//                                  addPost={addPost}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;