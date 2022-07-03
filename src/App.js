import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./Components/Header";
import Main from "./Components/pages/Main";
import NotFound from "./Components/pages/NotFound";
import {Routes, Route} from "react-router-dom";
import Cart from "./Components/pages/Cart";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                    <Routes>
                        <Route path={'/midas-pizza'} element={<Main/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
