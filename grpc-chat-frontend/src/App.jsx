import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Chatroom from './Chatroom';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
    </Router>
  );
};

export default App;
