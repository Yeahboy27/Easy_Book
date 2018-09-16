import React, {
    Component
} from 'react'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Root from './containers/app'
import reducer from './reducers'
import * as action from './actions/home'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';



const store = createStore(reducer, applyMiddleware(thunk, promiseMiddleware))
store.dispatch(action.getHome())
store.dispatch(action.getUpdate())
store.dispatch(action.getAll())
setTimeout(function(){console.log(store.getState())},
3000)

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

export default App