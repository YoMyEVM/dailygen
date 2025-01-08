// src/pages/Portfolio.tsx
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
      <p className="text-xl text-gray-300 text-center mb-4">
        Check out some of our most popular NFT collections below. Stay tuned for new projects and releases!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for portfolio items */}
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <div className="h-56 bg-gray-600 rounded-lg mb-4"></div>
          <h3 className="text-xl text-white font-bold">Collection Name 1</h3>
          <p className="text-gray-400 mt-2">A short description of the collection.</p>
        </div>
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <div className="h-56 bg-gray-600 rounded-lg mb-4"></div>
          <h3 className="text-xl text-white font-bold">Collection Name 2</h3>
          <p className="text-gray-400 mt-2">A short description of the collection.</p>
        </div>
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <div className="h-56 bg-gray-600 rounded-lg mb-4"></div>
          <h3 className="text-xl text-white font-bold">Collection Name 3</h3>
          <p className="text-gray-400 mt-2">A short description of the collection.</p>
        </div>
        {/* Add more collections as needed */}
      </div>
    </div>
  );
};

export default Portfolio;
