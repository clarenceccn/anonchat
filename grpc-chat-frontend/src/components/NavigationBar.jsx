import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation-bar-styles.css'
import GenerateTinyURL from './GenerateTinyURL.jsx'

function NavigationBar() {
    const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
              <button className="button" onClick={() => navigate('/')}> Home </button>
          </li>
        </ul>
        <div className="invite-button">
            <GenerateTinyURL/>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
