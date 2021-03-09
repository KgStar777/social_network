let initialState = {
    friends: [
        {id: '1', name: 'Groot', photo: '../../assets/images/Groot.jpg'},
        {id: '2', name: 'Star-Lord', photo: '../../assets/images/StarLord.jpg'},
        {id: '3', name: 'IronMan', photo: '../../assets/images/IronMan.jpg'},
        {id: '4', name: 'SpiderMan', photo: '../../assets/images/SpiderMan.jpg'},
        {id: '5', name: 'Thor Odinson', photo: '../assets/images/Thor.jpg'},
        {id: '6', name: 'Hulk', photo: '../assets/images/Hulk.jpg'},
        {id: '7', name: 'Bruce Banner', photo: '../assets/images/Bruce.jpg'}
    ]
}

const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;