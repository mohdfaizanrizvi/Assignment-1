// Inbox.js
import React, { useState } from 'react';

const Inbox = ({ className, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(); 
  };

  return (
    <div className={`w-full h-16 p-2 mt-8 ${clicked ? 'bg-white' : ''}`} onClick={handleClick}>
      <img
        src="https://pic.onlinewebfonts.com/thumbnails/icons_501510.svg"
        alt="Inbox Icon"
        className={className}
        style={{ width: '100%', height: '100%', fill: 'white' }}
      />
    </div>
  );
};

export default Inbox;
