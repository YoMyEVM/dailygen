// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-dark-brown text-white p-4 fixed top-0 w-full z-10">
    <div className="max-w-screen-lg mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My DApp</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-purple-400">Home</Link>
        <Link to="/about" className="hover:text-purple-400">About</Link>
        <Link to="/contact" className="hover:text-purple-400">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
