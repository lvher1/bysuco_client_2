import React from "react";
import Main from "./pages/main";
import TimeSale from "./pages/timesale";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Nav from "./components/layout/nav";
import Brand from "./pages/brand";
import Rapple from "./pages/rapple";
import New from "./pages/new";
import Best from "./pages/best";
import Event from "./pages/event";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/brand/*" element={<Brand />} />
                <Route exact path="/timesale/*" element={<TimeSale />} />
                <Route path="/rapple/*" element={<Rapple />} />
                <Route path="/new/*" element={<New />} />
                <Route path="/best/*" element={<Best />} />
                <Route path="/event/*" element={<Event />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
