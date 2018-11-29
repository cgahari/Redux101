
import React from 'react';
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {App} from "./app/components/App";



const userReducer = (state = {
    name : "Charles",
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
     combineReducers({mathReducer,userReducer}),
    {},
    applyMiddleware(logger)
    );

 store.subscribe(() => {
     //console.log("Store updated !!!", store.getState());
 })

 store.dispatch({
     type: "ADD",
     payload: 100
 });

 store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBTRACT",
    payload: 23
});

store.dispatch({
    type:"SET_NAME",
    payload: "Goodman"
});
store.dispatch({
    type:"SET_AGE",
    payload: 30
});



render(
    <App />, 
        document.getElementById('root'));