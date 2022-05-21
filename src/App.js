import {Suspense} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useRoutes} from "react-router-dom";
import {ROUTES} from "./helpers/routes";
import dayjs from "dayjs";
import {testThunk} from "./redux/thunks/testThunk";
import {useDispatch} from "react-redux";

const fakeApi = {
    url: 'https://jsonplaceholder.typicode.com/todos'
}

const App = () => {
    const dispatch = useDispatch()
    const routes = useRoutes(ROUTES)

    // const date = Date.now()
    // const dateJS = dayjs(date)
    // console.log(dateJS.format('YYYY-mm:hh'))

    const getUsers = () => {
        dispatch(testThunk(fakeApi))
    }

    return (
        <Suspense fallback={<div className='portal'>...Loading</div>}>
            <div className="container">
                <Header/>
                {/*<button onClick={getUsers}>fetch</button>*/}
                {routes}
                {/*<Footer/>*/}
            </div>
        </Suspense>

    );
}

export default App;
