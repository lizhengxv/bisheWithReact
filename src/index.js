import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux'
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';

import 'antd-mobile/dist/antd-mobile.min.css'

import './static/css/font.css';


import store from './stores';


const MyApp  = (
    <Provider store={store}>
         <HashRouter>
            <App></App>
        </HashRouter>
    </Provider>
)




ReactDOM.render(MyApp, document.getElementById('root'));
// ReactDOM.render( <App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
