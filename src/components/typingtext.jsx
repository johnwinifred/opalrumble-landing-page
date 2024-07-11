// src/TypingText.js
import React from 'react';


const TypingText = ({ text }) => {
  return (
    <div className="typewriter  text-4xl md:text-5xl  overflow-hidden p-2  whitespace-nowrap animate-typing"
    style={{
      
    }}>
      <span>{text}</span>
      
    </div>
  );
};


export default TypingText;
