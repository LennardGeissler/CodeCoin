import React from "react";
import { Link } from "react-router-dom";
import "./home.scss"

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src="src/assets/ethereum.png" alt="" />
                <h1>Code<span>Coin</span></h1>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><Link to="/information">Information</Link></li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;