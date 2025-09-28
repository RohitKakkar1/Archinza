// ChatPopup.tsx
import React, { useState } from "react";

interface RecommendedItem {
  img: string;
  title: string;
}

interface MatchmadeItem {
  img: string;
  title: string;
  description: string;
}

interface ChatPopupProps {
  cardTitle: string;
  recommended: RecommendedItem[];
  matchmade: MatchmadeItem[];
  onClose: () => void;
}

export default function ChatPopup({ cardTitle, recommended, matchmade, onClose }: ChatPopupProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleImageSearch = () => {
    alert("Image search clicked! You can integrate file upload or camera here.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white h-[70vh] rounded-xl w-full max-w-2xl p-6 relative shadow-lg flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold mb-4">Search {cardTitle}</h2>

        {/* Search Bar with Image Search */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder={`Search ${cardTitle}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

        </div>

        {/* Recommended Items */}
        <h3 className="font-semibold mb-2">Recommended {cardTitle}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-32 overflow-y-auto mb-4">
          {recommended.map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-gray-50 rounded p-2">
              <img src={item.img} alt={item.title} className="w-full h-20 object-contain mb-1" />
              <p className="text-sm text-center">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Matchmade Section */}
        <h3 className="font-semibold mb-2">Matchmade for you</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-32 mb-4">
          {matchmade.map((item, i) => (
            <div key={i} className="flex flex-col items-left bg-gray-50 rounded p-2">
              <img src={item.img} alt={item.title} className="w-full h-20 object-contain mb-1" />
              <p className="text-sm text-left">{item.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
