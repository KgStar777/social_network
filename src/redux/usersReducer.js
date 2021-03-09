const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [
        // {
        //     id: '1',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: false,
        //     fullName: 'Groot',
        //     location: {city: 'Minsk', country: 'Belarus'},
        //     status: 'I\'m Groot'
        // },
        // {
        //     id: '2',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: false,
        //     fullName: 'Star-Lord',
        //     location: {city: 'Colorado', country: 'USA'},
        //     status: 'I\'m Groot'
        // },
        // {
        //     id: '3',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: true,
        //     fullName: 'Iron Man',
        //     location: {city: 'San Francisco', country: 'USA'},
        //     status: 'I\'m Groot'
        // },
        // {
        //     id: '4',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: true, fullName: 'Spider Man', location: {city: 'New York', country: 'USA'},
        //     status: 'I\'m Groot'
        // },
        // {
        //     id: '5',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: true,
        //     fullName: 'Thor Odinson',
        //     location: {city: 'New Asgard', country: 'Asgard'},
        //     status: 'I\'m Groot'
        // },
        // {
        //     id: '6',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: false, fullName: 'Hulk', location: {city: 'Dayton', country: 'USA'},
        //     status: 'I\'m Groot'
        // },
        // {
        //     id: '7',
        //     photoUrl: 'https://b.backbook.me/file/2019/07/26/7e/preview_rect_3acce77279.jpg',
        //     follower: true,
        //     fullName: 'Bruce Banner',
        //     location: {city: 'Dayton', country: 'USA'},
        //     status: 'I\'m Groot'
        // }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follower: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follower: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            // return { ...state, users: [ ...state.users, ...action.users]}
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUserCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUserCount})


export default usersReducer;