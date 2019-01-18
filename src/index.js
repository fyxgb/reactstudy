import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './store';
import * as serviceWorker from './serviceWorker';
import App from './page/App';
import './assets/sass/App.scss';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>, 
document.getElementById('root'));
serviceWorker.unregister();
