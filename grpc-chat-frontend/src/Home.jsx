import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectChatroom from './SelectChatroom';
import NavigationBar from './components/NavigationBar'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <NavigationBar/>
          <h1 className="text-3xl font-bold underline">
              Welcome to AnOnChat!
            </h1>
          <SelectChatroom/>
         {/*
          <button className="button" onClick={() => navigate('/chatroom')}> Join Chatroom </button>
          */}
          <button className="button" onClick={() => navigate('/chatbox')}> Create ChatBox </button>

        </div>
   );
};

export default Home;