import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App.js';
import { BrowserRouter } from "react-router-dom";

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);