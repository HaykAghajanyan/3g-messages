import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessagesProvider from "./contexts/MessagesProvider";
import {BrowserRouter} from "react-router-dom";
import RouteProvider from "./contexts/RouteProvider";
import UserProvider from "./contexts/UserProvider";
import {persistedStore, store} from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
                <UserProvider>
                    <RouteProvider>
                        <MessagesProvider>
                            <App/>
                        </MessagesProvider>
                    </RouteProvider>
                </UserProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
