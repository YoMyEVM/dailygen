// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-10 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
      <p className="text-xl text-gray-300 text-center mb-4">
        Welcome to DailyGen.Art! We are a platform dedicated to bringing you unique digital collectibles, 
        powered by the latest in blockchain technology. Our mission is to make it easy for you to discover, 
        generate, and collect NFTs that you love.
      </p>
      <p className="text-xl text-gray-300 text-center">
        Stay tuned for more features and exciting updates. Our team is working hard to bring you the best experience.
      </p>
    </div>
  );
};

export default About;
