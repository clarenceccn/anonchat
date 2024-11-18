import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Chatroom from './Chatroom';
import Chatbox from './Chatbox';




function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatroom" element={<Chatroom />} />
            <Route path="/chatbox" element={<Chatbox />} />
        </Routes>
    </Router>
  );
};

export default App;
