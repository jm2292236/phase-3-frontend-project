import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import NavBar from "./components/NavBar";

import Header from "./components/Header";
import Location from "./components/location/Location";
import Service from "./components/service/Service";
import Vehicle from "./components/vehicle/Vehicle";
import VehicleFilter from "./components/log/VehicleFilter";

function App() {
    // let navigate = useNavigate();
    // navigate("/vehicles");

    return (
        <div className="App">
            <Header/>
            <NavBar/>

            <Routes>
                <Route path="/locations" element={<Location/>} ></Route>
                <Route path="/services" element={<Service/>} ></Route>
                <Route path="/vehicles" element={<Vehicle/>} ></Route>
                <Route path="/logs" element={<VehicleFilter/>} ></Route>
            </Routes>
        </div>
    );
}

export default App;
