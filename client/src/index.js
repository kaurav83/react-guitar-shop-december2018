import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import Reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root')
);