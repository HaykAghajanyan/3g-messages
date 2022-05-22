import {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";
import Cats from "./components/Cats/Cats";
// import Auth from "./components/Auth/Auth";

const Auth = lazy(() => import('./components/Auth/Auth'))

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='messages' element={<Messages/>}/>
                    <Route path='auth' element={<Auth/>}/>
                    <Route path='cats' element={<Cats/>}/>
                    <Route path='*' element={<Navigate to='messages'/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
