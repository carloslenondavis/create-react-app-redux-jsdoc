/**
 * @file common/store/index.js
 * @module common/store
 * @desc This is the encapsulation of all reducers in a store
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {Object} List of store reducers
 */
import { createStore, applyMiddleware } from 'redux';
import appReducers from './../reducers';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log("next state", store.getState());
});

export default store;
