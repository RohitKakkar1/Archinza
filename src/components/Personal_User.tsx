import { ArrowRight, MessageSquare, Image as ImageIcon } from "lucide-react";
import Header from "./personal_user/Header-User";
import DualLevelTabs from "./personal_user/Dual_level_tabs";
import heyyfdBar from "./personal_user/heyyfd";
import Middle from "./personal_user/Stack";
import AiCardSlider from "./personal_user/Nudge_Slider";
import HeroSection from "./personal_user/Hero_Section";
import AskArchinza from "./personal_user/AskArchinza";
import PersonalMasonryScroll from "./personal_user/PersonalMasonaryScroll";
import { Share2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import VisualDiscovery from "./personal_user/VisualDiscovery";


  
  
export default function MobileCards() {
      const tabs = ["heyyfd", "Interests", "Saved", "Contact"];
    const [active, setActive] = useState("heyyfd");
  
    // Refs for each section
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
      heyyfd: useRef(null),
      Interests: useRef(null),
      Saved: useRef(null),
      Courses: useRef(null),
      Events: useRef(null),
      Contact: useRef(null),
    };
  
    // Observe which section is in view
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id); // section id = tab name
            }
          });
        },
        { threshold: 0.6 }
      );
  
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.observe(ref.current);
      });
  
      return () => observer.disconnect();
    }, []);
  
    // Scroll to section when clicking a tab
  const handleTabClick = (tab: string) => {
    setActive(tab);
    const element = sectionRefs[tab].current;
    if (element) {
      const headerOffset = 110; // height of fixed header
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col relative bg-white dark:bg-gray-900 ">


    <section className="mx-0">
    <HeroSection />
    </section>


        {/* Tabs (Sticky on Mobile) */}
        <div className="block lg:hidden sticky top-0 z-20 bg-white dark:bg-gray-800">
          {/* Business Header Bar */}
          <div className="w-full py-2 px-4 bg-blue-600 sm:hidden overflow-hidden flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo inside rectangle */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/BusinessView/ltdf.png"
                  alt="LTDF Studios Logo"
                  className="object-contain rounded-xl max-w-full max-h-full"
                />
              </div>
              <h2 className="text-lg text-white font-regular">Hi Shruti</h2>
            </div>
            <div className="bg-white dark:bg-white dark:bg-gray-700 p-2 rounded-3xl">
              <Share2 className="w-5 h-5 text-blue-900 dark:text-blue-800  cursor-pointer" />
            </div>
          </div>

          {/* Tabs */}
          <div
            className="flex gap-3 px-4 py-2 mb-0 border-b-2 border-gray-100 dark:border-gray-700 
                       overflow-x-auto whitespace-nowrap 
                       [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition 
                  ${
                    active === tab
                      ? "bg-orange-500 dark:bg-orange-700 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <VisualDiscovery />


        {/* Sticky Dual Tabs */}
        <div className="sticky p-4 top-24 z-100 bg-white dark:bg-gray-900">
          <DualLevelTabs />
        </div>

        <AskArchinza />
      </div>
    </div>
  );
}
