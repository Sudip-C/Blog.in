import {applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import blogReducer from './reducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  blog: blogReducer,
});

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;