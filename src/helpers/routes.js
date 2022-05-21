import Messages from "../components/Messages/Messages";
// import AuthComponent from "../components/AuthComponent/AuthComponent";
import {Navigate} from "react-router-dom";
import Cats from "../components/Cats/Cats";
import {lazy} from "react";

const AuthComp = lazy(() => import('../components/AuthComponent/AuthComponent'))

const MAIN_ROUTES = [
    {
        path: 'messages',
        element: <Messages/>,
        // children: [
        //     {
        //         path: ':id',
        //         element: <Test />
        //     }
        // ]
    },
    {
        path: 'auth',
        element: <AuthComp/>
    },
    {
        path: 'cats',
        element: <Cats/>
    },
]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: '*',
        element: <Navigate to='messages'/>
    }
]
