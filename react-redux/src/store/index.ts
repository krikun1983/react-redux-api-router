import { applyMiddleware, createStore } from 'redux';
import think from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(think));

export default store;
