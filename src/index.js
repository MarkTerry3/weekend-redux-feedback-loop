import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';



const feelingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportedReducer = (state = [], action) => {
    if (action.type === 'ADD_SUPPORTED') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload;
    }
    return state;
}











// The store is the big JavaScript Object that holds all of the information for our application
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
  );





ReactDOM.render(
    <Provider store={reduxStore}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
