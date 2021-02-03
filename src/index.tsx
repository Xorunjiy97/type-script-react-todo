import React from 'react';
import App from './App';
import store from './roots/rootReducer';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

