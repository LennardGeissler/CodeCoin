import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Information from './Information';
import Home from './Home';
import Login from './Login';
import Account from './Account';
import './home.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
        {/* Weitere Routen für zusätzliche Seiten */}
      </Routes>
    </Router>
  );
}

export default App;
