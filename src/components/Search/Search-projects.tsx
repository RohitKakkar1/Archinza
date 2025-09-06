import { useState } from "react";
import SearchBar from "./search_bar";

const projectCategories = [
  { name: "Ongoing Projects", icon: "📂" },
  { name: "Completed Projects", icon: "✅" },
  { name: "Collaborations", icon: "🤝" },
  { name: "Drawings & BIM Models", icon: "📐" },
  { name: "Materials & Vendors", icon: "🧱" },
  { name: "Reports & Documentation", icon: "📑" },
];

const projectSuggestions = [
  [
    "Tile vendors near me",
    "Vastu Consultants in Mumbai",
    "PR agencies for my businesses",
    "Bespoke Furniture",
  ],
  [
    "Who can make Table like this",
    "Metal Fabricators near me",
    "compare completed projects",
    "Tile distributors in Shimla",
  ],
];

export default function YourProjects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Search */}
      <SearchBar />

      {/* Suggested People */}
      <div className="px-4 mt-2 w-full space-y-4">
        <div className="flex items-center justify-center">
          <h1>What others are searching</h1>
        </div>
        {projectSuggestions.map((row, rIdx) => (
          <div
            key={rIdx}
            className="flex gap-3 overflow-x-auto scrollbar-hide"
          >
            {row.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-sm text-sm  flex-shrink-0 hover:shadow-md transition"
              >
                <img
                  src={`https://i.pravatar.cc/40?img=${i + rIdx * 4 + 1}`}
                  alt={name}
                  className="w-6 h-6 rounded-full flex-shrink-0"
                />
                <span className="truncate">{name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-6 transition-all duration-500 ${
          isExpanded ? "h-[100%]" : "h-[65%]"
        }`}
      >
        {/* Drag Handle */}
        <div
          className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* Categories */}
        <div className="grid grid-cols-3 gap-6">
          {projectCategories.map((c, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-xl text-2xl shadow-sm">
                {c.icon}
              </div>
              <p className="text-xs font-medium text-gray-700">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
