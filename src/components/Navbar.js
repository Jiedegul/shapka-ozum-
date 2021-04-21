import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border mb-4">
            <div className="container">
                <NavLink to="/" className="navbar-brand">News.kj</NavLink>
                <ul className="navbar-nav">
                    <li className="item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="item">
                        <NavLink  exact className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact className="nav-link" to="/contacts">Contacts</NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact className="nav-link" to="/register">Register</NavLink>
                    </li>

                </ul>
            </div>
        </nav>

    );
};

export default Navbar;