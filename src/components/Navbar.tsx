import React from 'react';

const Navbar: React.FC = () => (
  <nav className="bg-black text-white p-4 fixed top-0 w-full z-10">
    <div className="max-w-screen-lg mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">DailyGen.Art</h1>

      {/* Connect Wallet Button */}
      <button className="bg-[#888888] text-black py-2 px-6 rounded-full hover:bg-[#fff]">
        Connect Wallet
      </button>
    </div>
  </nav>
);

export default Navbar;
