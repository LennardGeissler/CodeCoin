import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './home.scss';

const Header = () => {
    return (
        <header>
            <NavBar />
            <section className="welcome">
                <h1>Explore the world of the new currencies...</h1>
                <p>Trade, earn and inform yourself about the latest cryptocurrencies around the world and dive deep into the world
                    of decentralized, encrypted currencies.</p>
                <div>
                    <button onClick={() => location.href = "/information"}>Information</button>
                    <button onClick={()=> location.href = "/login"}>Login</button>
                </div>
            </section>
        </header>
    )
}

export default Header;