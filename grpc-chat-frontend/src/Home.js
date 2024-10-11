import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
          <h1> hello world </h1>
          <button onClick={() => navigate('/chatroom')}> Join Chatroom </button>
        </div>
   );
};

export default Home;