// DailyGenCard.tsx
interface DailyGenCardProps {
  day: number;
  buyPrice: string;
  sellPrice: string;
  images: string[]; // Array of image URLs
  isOpen: boolean; // Determines if the card should be open
  onToggle: (day: number) => void; // Function to toggle card open state
}

const DailyGenCard = ({
  day,
  buyPrice,
  sellPrice,
  images,
  isOpen,
  onToggle,
}: DailyGenCardProps) => {
  // Prevent the card from closing when clicking on the details box
  const handleDetailsClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from propagating to the card
  };

  return (
    <div
      className={`border border-gray-600 rounded-lg p-4 cursor-pointer bg-[#111111] hover:bg-[#111111] transition-all duration-300`}
      onClick={() => onToggle(day)} // Toggle on card click
    >
      {/* Card Content (When Closed) */}
      {!isOpen && (
        <div className="flex items-center justify-between">
          {/* Left: Images */}
          <div className="flex space-x-2">
            {images.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="w-12 h-12 object-cover rounded-md border-2 border-[#444444]"
              />
            ))}
          </div>

          {/* Center: Day Title */}
          <div className="flex items-center mr-10"> {/* Shifted left */}
            <h3 className="text-xl font-bold text-white">Day {day}</h3>
          </div>

          {/* Right: Buy Price and Sell Price */}
          <div className="text-right">
            <div className="text-lg font-medium text-white">Buy: {buyPrice}</div>
            <div className="text-lg font-medium text-gray-400">Sell: {sellPrice}</div>
          </div>
        </div>
      )}

      {/* Card Content (When Open) */}
      {isOpen && (
        <div className="mt-4 text-white">
          <div className="mb-4 flex justify-center">
            {/* Large Image */}
            <img
              src={images[0] || "https://via.placeholder.com/600x400?text=Large+Image"}
              alt="Large Image"
              className="w-full max-w-[600px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Smaller Images */}
          <div className="flex justify-center space-x-4 mb-4">
            {images.slice(1, 3).map((img, index) => (
              <img
                key={index}
                src={img || "https://via.placeholder.com/200x200?text=Small+Image"}
                alt={`Small Image ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md"
              />
            ))}
          </div>

          {/* Info Below the Images - Details Box */}
          <div
            className="bg-[#222222] p-4 rounded-lg mt-4"
            onClick={handleDetailsClick} // Prevent toggle on details box click
          >
            <div className="flex justify-between">
              {/* Left: Day Title and Details */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">Day {day}</h3>
                <p className="text-base text-gray-300 mt-2">
                  Additional details about Day {day} go here.
                </p>
              </div>

              {/* Right: Buy Price and Sell Price */}
              <div className="text-right">
                <div className="text-lg font-medium text-white">Buy: {buyPrice}</div>
                <div className="text-lg font-medium text-gray-400">Sell: {sellPrice}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyGenCard;
