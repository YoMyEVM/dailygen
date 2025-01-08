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
  const [timer, setTimer] = useState<number>(25 * 60 * 60); // 25 hours in seconds
  const [showStartButton, setShowStartButton] = useState<boolean>(false);

  const sortedItems = dailyItems.sort((a, b) => b.day - a.day);

  const handleToggle = (day: number) => {
    setOpenDay(openDay === day ? null : day); // Toggle open/close for each card
  };

  const startNewDay = () => {
    // Logic to start the new day and reset the timer
    setTimer(25 * 60 * 60); // Reset timer to 25 hours
    setShowStartButton(false); // Hide the button after the start
  };

  // Countdown Timer Effect
  useEffect(() => {
    if (timer <= 0) {
      setShowStartButton(true); // Show button when timer reaches 0
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1); // Decrement timer every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount or when timer ends
  }, [timer]);

  // Format timer to display in hh:mm:ss
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto mt-10 px-4 py-16">
      {/* Countdown Timer */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-white">Next Collection Starts In</h2>
        <div className="text-3xl font-bold text-[#01fcfc]">
          {formatTime(timer)}
        </div>
      </div>

      {/* "Start New and Buy" Button */}
      {showStartButton && (
        <div className="text-center">
          <button
            onClick={startNewDay}
            className="bg-[#fd01f5] text-white py-2 px-6 rounded-full"
          >
            Start New and Buy
          </button>
        </div>
      )}

      {/* Daily Cards */}
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
          />
        ))}
      </div>
    </div>
  );
};

export default DailyTable;
