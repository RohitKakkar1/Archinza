import { useState } from "react";
import Footer from "./footer";

// Import your tab components
import Jobs from "./Jobs";
import Courses from "./Courses";
import Events from "./Events";
import DesignConsultancies from "./DesignConsultancies";
import Brands from "./Brands";
import DesignBuild from "./DesignBuild";
import SupportServices from "./SupportServices";
import Manufacture from "./DesignConsultancies copy";
import BusinessCarousel from "./BusinessTile";
import BusinessCategories from "./BusinessTypes";
import InterestSelector from "./Interest";
import Interest_Project from "./Interest_Project";
import RecentlyAddedBusinesses from "./recent";
import PersonalCategories from "./PersonalCards";

export default function DualLevelTabs() {
  const [activeMain, setActiveMain] = useState("For You");
  const [activeSub, setActiveSub] = useState("Jobs");

  // Sub-tabs for each main category
  const subTabs: Record<string, string[]> = {
    "For You": ["Jobs", "Courses", "Events"],
    "For Projects": [
      "Design & Consult",
      "Build or Install",
      "Brands",
      "Manufacture & Distribute",
      "Support Services",
    ],
  };

  // Component mapping
  const componentMap: Record<string, JSX.Element> = {
    Jobs: <Jobs />,
    Courses: <Courses />,
    Events: <Events />,
    "Design & Consult": <DesignConsultancies />,
    "Brands": <Brands />,
    "Build or Install": <DesignBuild />,
    "Manufacture & Distribute": <Manufacture />,
    "Support Services": <SupportServices />,
  };

  return (
    <section className="flex flex-col min-h-screen pb-20">
      {activeMain === "For You" && (
        <>

        <BusinessCarousel />

       <PersonalCategories />

        <InterestSelector />

          {/* Sticky Sub Tabs (positioned below SearchBar) */}
          <div
            className="sticky top-16 z-40
                       bg-white dark:bg-gray-900 
                       flex gap-3 px-4 py-2
                       border-b-2 border-gray-100 dark:border-gray-700
                       overflow-x-auto whitespace-nowrap 
                       [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {subTabs[activeMain].map((tab) => (
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

          {/* Render the actual component */}
          <div className="p-2 space-y-4">
            {componentMap[activeSub]}
          </div>
        </>
      )}

            {activeMain === "For Projects" && (
        <>

        <BusinessCarousel />
        
        <BusinessCategories />

        <RecentlyAddedBusinesses />



        <Interest_Project />

          {/* Sticky Sub Tabs (positioned below SearchBar) */}
          <div
            className="sticky top-16 z-40
                       bg-white dark:bg-gray-900 
                       flex gap-3 px-4 py-2
                       border-b-2 border-gray-100 dark:border-gray-700
                       overflow-x-auto whitespace-nowrap 
                       [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {subTabs[activeMain].map((tab) => (
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

          {/* Render the actual component */}
          <div className="p-2 space-y-4">
            {componentMap[activeSub]}
          </div>
        </>
      )}


      {activeMain === "Explore" && (
        <div className="p-6">

        </div>
      )}

      {/* Fixed Footer */}
      <Footer
        activeMain={activeMain}
        setActiveMain={setActiveMain}
        subTabs={subTabs}
        setActiveSub={setActiveSub}
      />
    </section>
  );
}
