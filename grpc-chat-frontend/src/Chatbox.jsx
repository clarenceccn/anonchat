import React from 'react'
import { Chat } from './Chat'
import PrimaryButton from './components/PrimaryButton'
import MessagesList from './components/MessagesList'
import NavigationBar from './components/NavigationBar'

const Chatbox = () => {
    return (
        <div className="App">
          <NavigationBar />
          <div>
            <Chat />
          </div>
        </div>

   );
};

export default Chatbox;