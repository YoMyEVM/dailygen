// src/components/footer/Footer.tsx
import DappCard from "components/DappCard";  // Updated import path

const Footer = () => {
  const dappCards = [
    {
      title: "Dapp 1",
      description: "This is the description for Dapp 1.",
      link: "https://dapp1.example.com",
      image: "https://via.placeholder.com/150",  // Example image URL
    },
    {
      title: "Dapp 2",
      description: "This is the description for Dapp 2.",
      link: "https://dapp2.example.com",
      image: "https://via.placeholder.com/150",  // Example image URL
    },

    {
      title: "Dapp 3",
      description: "This is the description for Dapp 3.",
      link: "https://dapp3.example.com",
      image: "https://via.placeholder.com/150",  // Example image URL
    },
    {
      title: "Dapp 4", // Renamed the second Dapp 3 to Dapp 4 for uniqueness
      description: "This is the description for Dapp 4.",
      link: "https://dapp4.example.com",
      image: "https://via.placeholder.com/150",  // Example image URL
    }
  ];

  return (
    <footer className="fixed bottom-0 w-full bg-dark-brown text-center py-1 text-gray-400 font-bold h-auto min-h-[12vh] flex justify-center items-center">
      <div className="flex justify-center items-center space-x-4 flex-wrap w-full max-w-screen-lg mx-auto">
        {dappCards.map((card, index) => (
          <DappCard
            key={index}
            image={card.image}  // Pass image URL here
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
