import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "120px",
    borderRadius: "5%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#D48978",
    textDecoration: "none",
    color: "white",
    textAlign: "center"
};

export default function NavBar() {
    return (
        <div>
            <NavLink
                to="/locations"
                style={linkStyles}
            >
                Locations
            </NavLink>
            
            <NavLink
                to="/services"
                style={linkStyles}
            >
                Services
            </NavLink>
            
            <NavLink
                to="/vehicles"
                style={linkStyles}
            >
                Vehicles
            </NavLink>
            
            <NavLink
                to="/logs"
                style={linkStyles}
            >
                Logs
            </NavLink>
            
        </div>
    )
}
