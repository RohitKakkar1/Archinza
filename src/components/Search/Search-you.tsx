import { useState } from "react";
import SearchBar from "./search_bar";
import DualLevelTabs from "../personal_user/Dual_level_tabs";
import PersonalTabs from "./PersonalTabs";



const suggestions = [
  [
    "architecture jobs",
    "how to grow my architecture instagram page",
    "best freelance interior design platforms",
    "laptop is best for bim & 3d rendering",
  ],
  [
    "get featured in design magazines",
    "top green architecture courses online",
    "architecture events & exhibitions near me",
    "pr agencies for architecture influencers",
  ],

];


export default function ForYou() {
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
        {suggestions.map((row, rIdx) => (
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


        {/* Categories */}
          <PersonalTabs />
      </div>
    </div>
  );
}
