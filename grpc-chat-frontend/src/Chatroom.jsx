import React from 'react';
import { Chat } from './Chat';
import PrimaryButton from './components/PrimaryButton'

const Chatroom = () => {
    return (
        <div className="App">
          <h1> hello world this is hot reload</h1>
          <PrimaryButton> click me </PrimaryButton>
          <Chat />
        </div>
   );
};

export default Chatroom;