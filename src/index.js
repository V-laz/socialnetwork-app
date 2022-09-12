import reportWebVitals from './reportWebVitals';
import state, { subscriber } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntiretree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>
    );
}
rerenderEntiretree(state);
subscriber(rerenderEntiretree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
