import React from "react";

interface FooterProps {
  activeMain: string;
  setActiveMain: (tab: string) => void;
  subTabs: Record<string, string[]>;
  setActiveSub: (tab: string) => void;
}

export default function Footer({
  activeMain,
  setActiveMain,
  subTabs,
  setActiveSub,
}: FooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center 
                    border-t border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-gray-900 px-6 py-3 z-40">
      {["For You", "For Projects", "Explore"].map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveMain(tab);
            if (tab !== "Explore") setActiveSub(subTabs[tab][0]);
          }}
          className={`text-lg font-medium transition ${
            activeMain === tab
              ? tab === "Explore"
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg"
                : "text-blue-600"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
