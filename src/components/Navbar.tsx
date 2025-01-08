// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-black text-white p-4 fixed top-0 w-full z-10">
    <div className="max-w-screen-lg mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">DailyGen.Art</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
