import {combineReducers, legacy_createStore } from 'redux';
import blogReducer from './reducer';

const rootReducer = combineReducers({
  blog: blogReducer,
});

const store = legacy_createStore(rootReducer);

export default store;