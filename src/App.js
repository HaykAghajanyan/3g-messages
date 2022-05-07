import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Messages/>
            <Footer/>
        </div>
    );
}

export default App;
