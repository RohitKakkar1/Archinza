// DeepSearch.tsx
import { useState } from "react";
import ToggleSwitch from "./Toggle";
import Header from "./Header-User";

const categories = [
  { name: "Architects", icon: "🏛️" },
  { name: "Interior Designers", icon: "🛋️" },
  { name: "Vastu Consultants", icon: "🧭" },
  { name: "MEP Consultancy", icon: "⚡" },
  { name: "HVAC Consultancy", icon: "❄️" },
  { name: "Landscape Design", icon: "🌳" },
];

export default function DeepSearch() {
  const [isExpanded, setIsExpanded] = useState(false);

const suggestions = [
  [
    "architecture internships near me",
    "best tile vendors in Delhi NCR",
    "freelance interior design jobs online",
    "metal fabricators",
  ],
  [
    "pr agencies",
    "top 3d visualization studios near me",
    "mep consultants for residential projects",
    "sustainable building material suppliers",
  ],
];


  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center ">
      {/* Header */}

<Header />


      {/* Centered Search */}
      <div className="flex flex-col h-[fit] items-center w-full py-8">
        <div className="flex flex-col items-center mb-4 gap-2">
          <h1 className="text-3xl font-regular">Hey Shruti</h1>
          <h2 className="text-gray-600 dark:text-gray-300">
            You Design and we'll help you discover
          </h2>
        </div>

        <ToggleSwitch />

        

      </div>




    </div>
  );
}

// Tailwind: hide scrollbar
// Add in globals.css if not already
/*
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  
  scrollbar-width: none;     
}
*/
