import { useState } from 'react';
import DailyGenCard from './DailyGenCard';

const dailyItems = [
  {
    day: 3,
    buyPrice: "$170",
    sellPrice: "$130",
    images: [
      "https://via.placeholder.com/600x400?text=Large+Image+1", 
      "https://via.placeholder.com/200x200?text=Small+Image+1", 
      "https://via.placeholder.com/200x200?text=Small+Image+2"
    ], // Example image URLs
  },
  {
    day: 2,
    buyPrice: "$120",
    sellPrice: "$90",
    images: [
      "https://via.placeholder.com/600x400?text=Large+Image+2",
      "https://via.placeholder.com/200x200?text=Small+Image+3",
      "https://via.placeholder.com/200x200?text=Small+Image+4"
    ],
  },
  {
    day: 1,
    buyPrice: "$200",
    sellPrice: "$160",
    images: [
      "https://via.placeholder.com/600x400?text=Large+Image+3",
      "https://via.placeholder.com/200x200?text=Small+Image+5",
      "https://via.placeholder.com/200x200?text=Small+Image+6"
    ],
  },
  // More items can be added here
];

const DailyTable = () => {
  const [openDay, setOpenDay] = useState<number | null>(3); // Open highest day by default

  const sortedItems = dailyItems.sort((a, b) => b.day - a.day);

  const handleToggle = (day: number) => {
    setOpenDay(openDay === day ? null : day); // Toggle open/close for each card
  };

  const handleGenerate = () => {
    // Handle the generate action (minting)
    console.log('Generating NFT...');
  };

  const handleBurn = () => {
    // Handle the burn action (burning NFT)
    console.log('Burning NFT...');
  };

  return (
    <div className="container mx-auto mt-10 px-4 py-16">
      <div className="space-y-4">
        {sortedItems.map((item, index) => (
          <DailyGenCard
            key={index}
            day={item.day}
            buyPrice={item.buyPrice}
            sellPrice={item.sellPrice}
            images={item.images}
            isOpen={openDay === item.day} // Open the card if it matches the current openDay
            onToggle={handleToggle} // Pass the toggle function
            onGenerate={handleGenerate} // Pass the generate function
            onBurn={handleBurn} // Pass the burn function
          />
        ))}
      </div>
    </div>
  );
};

export default DailyTable;
