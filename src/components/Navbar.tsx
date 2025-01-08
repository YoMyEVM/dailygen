// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-black text-white p-4 fixed top-0 w-full z-10">
    <div className="max-w-screen-lg mx-auto flex justify-between items-center">
      {/* Left: About link */}
      <Link to="/about" className="text-2xl font-bold text-white hover:text-gray-400">
        DailyGen.Art
      </Link>

      {/* Center: Generate and Portfolio links */}
      <div className="space-x-6 flex">
        {/* Updated the link to `/` (root) to align with the "Generate" page */}
        <Link to="/" className="text-white hover:text-gray-400">
          Generate
        </Link>
        <Link to="/portfolio" className="text-white hover:text-gray-400">
          Portfolio
        </Link>
      </div>

      {/* Right: Connect Wallet Button */}
      <button className="bg-[#888888] text-black py-2 px-6 rounded-full hover:bg-[#fff]">
        Connect Wallet
      </button>
    </div>
  </nav>
);

export default Navbar;
