const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messages: [...state.messages, {id: '7', message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = text => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})

export default dialogsReducer;