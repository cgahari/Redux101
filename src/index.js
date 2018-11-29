
import React from 'react';
import {render} from "react-dom";
import App from "./app/container/App";
import {Provider} from "react-redux";
import store from "./app/store"


// const myLogger = (store) => (next) => (action)=> {
//     console.log("Logged Action: ", action);
//     next(action);
// }



//  store.subscribe(() => {
//      //console.log("Store updated !!!", store.getState());
//  })

render(
    <Provider store ={store}>
        <App />
    </Provider>, 
        document.getElementById('root'));