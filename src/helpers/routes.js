import Messages from "../components/Messages/Messages";
import AuthComponent from "../components/AuthComponent/AuthComponent";
import {Navigate} from "react-router-dom";
import MessageComponent from "../components/MessageComponent/MessageComponent";
import Test from "../components/test/Test";


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
        element: <AuthComponent/>
    },
]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: '*',
        element: <Navigate to='messages'/>
    }
]
