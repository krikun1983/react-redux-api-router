import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import think from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(think)));

export default store;
