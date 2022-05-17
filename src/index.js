import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessagesProvider from "./contexts/MessagesProvider";
import {BrowserRouter} from "react-router-dom";
import AuthTabProvider from "./contexts/AuthTabProvider";
import UserProvider from "./contexts/UserProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthTabProvider>
            <UserProvider>
                <MessagesProvider>
                    <App />
                </MessagesProvider>
            </UserProvider>
        </AuthTabProvider>
    </BrowserRouter>
);
