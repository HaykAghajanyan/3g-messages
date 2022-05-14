import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useRoutes} from "react-router-dom";
import {ROUTES} from "./helpers/routes";
import dayjs from "dayjs";

const App = () => {
    const routes = useRoutes(ROUTES)

    const date = Date.now()
    const dateJS = dayjs(date)
    console.log(dateJS.format('YYYY-mm:hh'))

    return (
        <div className="container">
            <Header/>
            {routes}
            <Footer/>
        </div>
    );
}

export default App;
