import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import store from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store = {store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    debugger;
    let state = store.getState();
    rerenderEntireTree(state);
});



//hz
reportWebVitals();
