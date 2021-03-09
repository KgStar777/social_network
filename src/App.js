import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
// import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {

    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        {/*<Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />*/}


                        <Route path='/dialogs'
                               render={ () => <DialogsContainer />
                               } />
                        <Route path='/profile'
                               render={ () => <Profile />
                               } />
                        <Route path='/friends'
                               render={ () =><FriendsContainer
                                   // state={props.state.dialogsPage}
                               />
                               } />
                        <Route path='/users'
                               render={ () => <UsersContainer /> } />
                        <Route path='/news'
                               render={ () => <News />} />
                        <Route path='/music'
                               render={ () => <Music />} />
                        <Route path='/settings'
                               render={ () => <Settings />} />


                        {/*<Dialogs/>*/}
                        {/*<Profile />*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
