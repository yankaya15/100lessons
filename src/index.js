import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    { id: 1, message:'Hi, how are you', likesCount:4 },
    { id: 2, message:'It\'s my first post', likesCount:12}
]

let dialogs = [
    { id:1, name: 'Iryna'},
    { id:2, name: 'Alexander'},
    { id:3, name: 'Makar'},
    { id:4, name: 'Zoya'}
]

let messages = [
    { id:1, message:'Hi'},
    { id:2, message:'How your Health'},
    { id:3, message:'So'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
