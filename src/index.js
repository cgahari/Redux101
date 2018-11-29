
import React from 'react';
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import App from "./app/container/App";
import {Provider} from "react-redux"



const userReducer = (state = {
    name : "Charlot",
     age : 40
},action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case "SET_NAME":
        state = {
            ...state,
            name : action.payload,
        };
            break;
        case "SET_AGE":
        state = {
            ...state,
            age : action.payload,
        };
            break;
    }
    return state;
};

const initialState = {
    result: 1,
    lastValues: []
};
const mathReducer = (state = initialState,action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case "ADD":
        state = {
            ...state,
            result : state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        case "SUBTRACT":
        state = {
            ...state,
            result : state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
    }
    return state;
};


const myLogger = (store) => (next) => (action)=> {
    console.log("Logged Action: ", action);
    next(action);
}

 const store = createStore(
     combineReducers({math: mathReducer,user: userReducer}),
    {},
    applyMiddleware(logger)
    );

 store.subscribe(() => {
     //console.log("Store updated !!!", store.getState());
 })

render(
    <Provider store ={store}>
        <App />
    </Provider>, 
        document.getElementById('root'));