import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: { //STEP ONE
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, my name is Nicholas Joseph Fury', likesCount: 7},
                {id: '2', message: "It's my first project on React", likesCount: 26},
                {id: '3', message: 'Are you know what said me Marvels heroes?', likesCount: 39}
            ],
            newPostText: 'go'
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Groot'},
                {id: '2', name: 'Star-Lord'},
                {id: '3', name: 'IronMan'},
                {id: '4', name: 'SpiderMan'},
                {id: '5', name: 'Thor Odinson'},
                {id: '6', name: 'Hulk'},
                {id: '7', name: 'Bruce Banner'}
            ],
            messages: [
                {id: '1', message: 'Groot'},
                {id: '2', message: "I'm Groot"},
                {id: '3', message: 'Groot'},
                {id: '4', message: 'Groot'},
                {id: '5', message: 'Brrr...'},
                {id: '6',
                    message: 'Groot is a Flora colossus and the accomplice of Rocket Raccoon. Together, the pair had traveled the galaxy picking up bounties until they met Star-Lord and Gamora just before the four of them were captured and put into the Kyln, where they also met Drax the Destroyer.'
                },
            ],
            newMessageBody: '' //newMessageText
        },
        friendsPage: {
            friends: [
                {id: '1', name: 'Groot'},
                {id: '2', name: 'Star-Lord'},
                {id: '3', name: 'IronMan'},
                {id: '4', name: 'SpiderMan'},
                {id: '5', name: 'Thor Odinson'},
                {id: '6', name: 'Hulk'},
                {id: '7', name: 'Bruce Banner'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe (observer) {
        this._callSubscriber = observer; //патерн observer (наблюдатель) //publisher-subscriber
    },
    getState () {
        return this._state;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state)
    }
}
// STEP TREE




export default store;
window.store = store;

//store - ООП