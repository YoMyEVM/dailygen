// src/components/dappCard/DappCard.tsx
import React from 'react';

interface DappCardProps {
  image: string;  // New prop for image URL
}

const DappCard: React.FC<DappCardProps> = ({ image }) => (
  <div className="flex flex-col items-center bg-gray-700 p-1 rounded-lg text-center shadow-md w-[100px] h-[100px] m-2">
    {/* Image */}
    <img src={image} alt="Dapp" className="w-full h-full object-cover rounded-md" />
  </div>
);

export default DappCard;
