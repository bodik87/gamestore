import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/home-page/home-page";
import Header from "./components/header/header";
import { store } from "./components/redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;