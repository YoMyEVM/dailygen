import { useState, useEffect } from 'react';
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
    ],
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
];

const DailyTable = () => {
  const [openDay, setOpenDay] = useState<number | null>(3);
  const [countdown, setCountdown] = useState<number>(25 * 60 * 60); // 25 hours countdown in seconds
  const sortedItems = dailyItems.sort((a, b) => b.day - a.day);

  const handleToggle = (day: number) => {
    setOpenDay(openDay === day ? null : day); 
  };

  const handleGenerate = () => {
    console.log('Generating NFT...');
  };

  const handleBurn = () => {
    console.log('Burning NFT...');
  };

  useEffect(() => {
    // Set an interval to update the countdown every second
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Clear the interval when the component unmounts or countdown reaches zero
    return () => clearInterval(interval);
  }, []);

  // Format countdown as HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto mt-10 px-4 py-16">
      {/* Countdown Timer */}
      <div className="text-center text-white mb-8">
        <h2 className="text-2xl font-bold">Next Round Starts In:</h2>
        <p className="text-3xl font-bold">{formatTime(countdown)}</p>
      </div>

      {/* Daily Items */}
      <div className="space-y-4">
        {sortedItems.map((item, index) => (
          <DailyGenCard
            key={index}
            day={item.day}
            buyPrice={item.buyPrice}
            sellPrice={item.sellPrice}
            images={item.images}
            isOpen={openDay === item.day}
            onToggle={handleToggle}
            onGenerate={handleGenerate}
            onBurn={handleBurn}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyTable;
