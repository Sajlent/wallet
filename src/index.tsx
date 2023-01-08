import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/views/App';
import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { makeServer } from './server';

if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' });
}

const container = document.getElementById('root')!;
const root = createRoot(container);
const router = createBrowserRouter([
    {
        path: '*',
        element: <App />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
