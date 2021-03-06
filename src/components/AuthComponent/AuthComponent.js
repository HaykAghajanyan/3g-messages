import {ACTIVE_ROUTES} from '../../helpers/constants'
import {useMemo, useState} from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {useAuthRoute} from "../../contexts/RouteProvider";

const [LOGIN, REGISTRATION] = ACTIVE_ROUTES

const component = {
    [LOGIN]: <Login />,
    [REGISTRATION]: <Register />
}

const AuthComponent = () => {
    const {activeRoute} = useAuthRoute()

    const ActiveComponent = useMemo(() => component[activeRoute], [activeRoute])

    return (
        <>
            {ActiveComponent}
        </>
    )
}

export default AuthComponent
