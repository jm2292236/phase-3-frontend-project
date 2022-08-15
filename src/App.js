import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";

import Location from "./components/Location";
import Service from "./components/Service";
import Vehicle from "./components/Vehicle";

function App() {
    // let navigate = useNavigate();
    // navigate("/vehicles");

    return (
        <div className="App">
            <header className="App-header">
                <h1>Vehicle Log App</h1>
            </header>

            <NavBar/>

            <Routes>
                <Route path="/locations" element={<Location/>} ></Route>
                <Route path="/services" element={<Service/>} ></Route>
                <Route path="/vehicles" element={<Vehicle/>} ></Route>
            </Routes>
        </div>
    );
}

export default App;
