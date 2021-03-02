import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

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
                               render={ () => <Dialogs
                                   dispatch={props.dispatch}
                                   store = {props.store} />
                               } />
                        <Route path='/profile'
                               render={ () => <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch} />
                               } />
                        <Route path='/friends'
                               render={ () =><Friends
                                   state={props.state.dialogsPage} /> //friendsPage
                               } />
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
