import React, { useState } from "react";
import Header from "../Navbar";
import {Route, Routes} from "react-router-dom"
import About from "../About";
import Home from "../Home";
import useWebSocket from 'react-use-websocket';
function Main() {
    return <>
        <Header />
        <Routes>
            <Route path="/about" element = {<About />}></Route>
            <Route path="/" element = {<Home />}></Route>
        </Routes>
    </>
}
export default Main;