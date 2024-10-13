import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectChatroom from './SelectChatroom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
          <h1> hello world </h1>
          <SelectChatroom/>
          <button onClick={() => navigate('/chatroom')}> Join Chatroom </button>
        </div>
   );
};

export default Home;