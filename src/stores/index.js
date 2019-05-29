import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk) );

export default store;


// redux-thunk 三步骤
// 引入applMiddleware
