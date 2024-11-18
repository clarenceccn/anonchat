import React, { useState } from 'react';
import './navigation-bar-styles.css'

function TinyURLGenerator() {
  const [shortenedLink, setShortenedLink] = useState('');

  const generateTinyURL = async () => {
    const chatroomURL = 'https://example.com/chatroom'; // Replace with your chatroom link

    try {
      const response = await fetch(`https://api.tinyurl.com/create`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_TINYURL_API_KEY', // Replace with your TinyURL API Key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: chatroomURL,
          domain: 'tinyurl.com', // Optional, specifies the domain
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create TinyURL');
      }

      const data = await response.json();
      setShortenedLink(data.data.tiny_url); // TinyURL link is in data.data.tiny_url
      alert(`Your TinyURL link is: ${data.data.tiny_url}`);
    } catch (error) {
      console.error(error);
      alert('Error generating TinyURL link.');
    }
  };

  return (
    <div className="invite-button">
      <button className="button" onClick={generateTinyURL}> Invite </button>
      {shortenedLink && (
        <p className="shortened-link">
          <a href={shortenedLink} target="_blank" rel="noopener noreferrer">
            {shortenedLink}
          </a>
        </p>
      )}
    </div>
  );
}

export default TinyURLGenerator;
