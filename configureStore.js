/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {

  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(thunk),
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}