import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessagesProvider from "./contexts/MessagesProvider";
import {BrowserRouter} from "react-router-dom";
import RouteProvider from "./contexts/RouteProvider";
import UserProvider from "./contexts/UserProvider";
import store from "./redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <UserProvider>
                <RouteProvider>
                    <MessagesProvider>
                        <App />
                    </MessagesProvider>
                </RouteProvider>
            </UserProvider>
        </BrowserRouter>
    </Provider>

);
