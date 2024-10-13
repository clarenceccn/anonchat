import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectChatroom from './SelectChatroom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
          <h1 class="text-3xl font-bold underline">
              Hello world!
            </h1>
          <SelectChatroom/>
          <button class="border-4" onClick={() => navigate('/chatroom')}> Join Chatroom </button>
        </div>
   );
};

export default Home;