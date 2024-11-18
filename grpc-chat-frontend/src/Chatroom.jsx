import React from 'react'
import { Chat } from './Chat'
import PrimaryButton from './components/PrimaryButton'
import MessagesList from './components/MessagesList'
import NavigationBar from './components/NavigationBar'

const Chatroom = () => {
    return (
        <div className="App">
          <NavigationBar />
          <h1> hello world this is hot reload</h1>
          <MessagesList />
          <Chat />
        </div>
   );
};

export default Chatroom;