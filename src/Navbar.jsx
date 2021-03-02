import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar">

            <div class="bg-img">
                <div class="container">
                    
                    <div class="topnav">
                    
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to = "/">BGG BIZZ</NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Navbar;
