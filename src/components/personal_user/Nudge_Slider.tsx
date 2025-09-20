import React from "react";

export default function AiCardSlider () {
  const cards = [
    {
      title: "Ideal lighting for a home office setup",
      color: "bg-blue-500",
      icon: "🏷️",
    },
    {
      title: "Marble vs quartz countertops?",
      color: "bg-pink-500",
      icon: "💡",
    },
    {
      title: "Veneer sellers near me",
      color: "bg-green-600",
      icon: "🧳",
    },
        {
      title: "Outdoor furniture sellers near me",
      color: "bg-green-600",
      icon: "🧳",
    },

  ];

  return (
    <div className="w-full flex flex-col items-center py-8">
      <h2 className="text-xl font-semibold mb-4">
        Ask Archinza anything
      </h2>

      {/* Card container */}
      <div className="flex gap-2 w-[100vw] overflow-x-auto no-scrollbar px-2">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`min-w-[120px] max-w-[140px] rounded-2xl p-4 ${card.color} text-white flex flex-col justify-between`}
          >
            {/* Icon */}
            <div className="text-2xl">{card.icon}</div>

            {/* Title */}
            <div className="text-sm font-medium leading-snug">
              {card.title}
            </div>


          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex space-x-2 mt-4">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === 0 ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
