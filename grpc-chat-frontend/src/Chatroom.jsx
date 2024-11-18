import React from 'react'
import { Chat } from './Chat'
import MessagesList from './components/MessagesList'

const Chatroom = () => {
    return (
        <div className="App">
          <h1> hello world this is hot reload</h1>
          <MessagesList />
          <Chat />
        </div>
   );
};

export default Chatroom;