import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessagesProvider from "./contexts/MessagesProvider";
import {BrowserRouter} from "react-router-dom";
import AuthTabProvider from "./contexts/AuthTabProvider";
import UserProvider from "./contexts/UserProvider";
import LanguageProvider from "./contexts/LanguageProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <LanguageProvider>
            <AuthTabProvider>
                <UserProvider>
                    <MessagesProvider>
                        <App />
                    </MessagesProvider>
                </UserProvider>
            </AuthTabProvider>
        </LanguageProvider>
    </BrowserRouter>
);
