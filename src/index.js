// #region load dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// #endregion
// #region load styles
import './index.scss';
// #endregion
// #region load components
import store from './common/store';
import App from './components/containers/App';
// #endregion

ReactDOM.render(    
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
