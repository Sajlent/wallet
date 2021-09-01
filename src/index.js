import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'views/App';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { makeServer } from './server';

if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' });
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
