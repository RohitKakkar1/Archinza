import { useState, useEffect, useRef } from "react";
import Gallery from "./Gallery";
import PDFs from "./PDFs";
import Courses from "./Courses";
import Events from "./Events";
import AboutMobile from "./AboutMobile";
import Header from "../Header";
import Contact from "./Contact";
import MasonryScroll from "./MasonaryScroll";
import { Share2 } from "lucide-react";
import BusinessTile from "./BusinessTile";


export default function DBMobile() {
  const tabs = ["About", "Gallery", "PDFs", "Contact"];
  const [active, setActive] = useState("About");

  // Refs for each section
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    About: useRef(null),
    Gallery: useRef(null),
    PDFs: useRef(null),
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
      { threshold: 0.6 } // section becomes active when 60% visible
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section when clicking a tab
  const handleTabClick = (tab: string) => {
    setActive(tab);
    sectionRefs[tab].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="top-0">

      <Header />
<hr className="border-t-2 border-gray-300 " />
            <MasonryScroll />


<div
  className="relative font-sans rounded-t-2xl bg-gray-50 [clip-path:inset(0_round_0.75rem_0.75rem_0_0)]"
>      {/* Tabs (Sticky on Mobile) */}
      <div className="block  lg:hidden sticky top-0 z-20 bg-white">

     <div className="w-full py-2 px-4 bg-blue-900 sm:hidden overflow-hidden flex items-center justify-between">
  <div className="flex items-center gap-3">
  {/* Logo inside rectangle */}
<div className="w-10 h-10  flex items-center justify-center">
  <img
    src="/BusinessView/ltdf.png"
    alt="LTDF Studios Logo"
    className="object-contain rounded-xl max-w-full max-h-full"
  />
</div>

  <h2 className="text-lg text-white font-regular">LTDF Studios</h2>
</div>

  <div className="bg-white p-2 rounded-3xl"><Share2 className="w-5 h-5 text-blue-900 cursor-pointer" /></div>
</div>
        <div className="flex gap-3 px-4 py-2 mb-0 border-b-2 border-gray-100 overflow-x-auto whitespace-nowrap 
                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition 
                ${active === tab ? "bg-orange-500 text-white" : "bg-white hover:bg-gray-100"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>



      {/* Sections (stacked, not conditional anymore) */}
      <div className="w-full lg:w-fit space-y-2">
        <div id="About" ref={sectionRefs.About}><AboutMobile /></div>
        <BusinessTile />
        <div id="Gallery" ref={sectionRefs.Gallery}><Gallery /></div>
        <div id="PDFs" ref={sectionRefs.PDFs}><PDFs /></div>
        <div id="Contact" ref={sectionRefs.Contact}><Contact /></div>
      </div>

    </div>
    </section>
  );
}
