let initialState = {
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

const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;