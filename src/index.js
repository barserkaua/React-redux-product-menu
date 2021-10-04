import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from "./components/error-boundry";
import RestoService from "./services/resto-service";
import RestoServiceContext from "./components/resto-service-context";
import store from "./store";

// ErrorBoundry - we need a border of errors that can occur lower in the hierarchy

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <StrictMode>
                        <App/>
                    </StrictMode>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);

