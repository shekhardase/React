import React from "react";
 // Assuming a separate CSS file for styling

function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar-container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Contact</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Feedback</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Products</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
