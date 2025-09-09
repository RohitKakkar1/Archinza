import { useState } from "react";

import DesignConsultancies from "./DesignConsultancies";
import DesignBuild from "./DesignBuild";
import Brands from "./Brands";
import Manufacture from "./DesignConsultancies copy";
import SupportServices from "./SupportServices";

export default function BusinessTabs() {
  const [activeSub, setActiveSub] = useState("Design & Consult");

  const subTabs: string[] = [
    "Design & Consult",
    "Build or Install",
    "Brands",
    "Manufacture & Distribute",
    "Support Services",
  ];

  const componentMap: Record<string, JSX.Element> = {
    "Design & Consult": <DesignConsultancies />,
    "Build or Install": <DesignBuild />,
    "Brands": <Brands />,
    "Manufacture & Distribute": <Manufacture />,
    "Support Services": <SupportServices />,
  };

  return (
    <section className="flex flex-col min-h-screen pb-20">
      {/* Sticky Sub Tabs */}
      <div
        className="sticky top-16 z-40
                   bg-white dark:bg-gray-900 
                   flex gap-3  py-2
                   border-b-2 border-gray-100 dark:border-gray-700
                   overflow-x-auto whitespace-nowrap 
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSub(tab)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition 
              ${
                activeSub === tab
                  ? "bg-orange-500 dark:bg-orange-700 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render Component */}
      <div className="space-y-4">{componentMap[activeSub]}</div>

    </section>
  );
}
