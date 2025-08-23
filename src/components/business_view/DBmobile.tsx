import { useState, useEffect, useRef } from "react";
import Gallery from "./Gallery";
import PDFs from "./PDFs";
import Courses from "./Courses";
import Events from "./Events";
import AboutMobile from "./AboutMobile";
import Header from "../Header";
import Contact from "./Contact";

export default function DBMobile() {
  const tabs = ["About", "Gallery", "PDFs", "Courses", "Events", "Contact"];
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

<div className="flex flex-col gap-2">
      {/* Tabs (Sticky on Mobile) */}
      <div className="block lg:hidden sticky top-0 z-20 bg-white">

      <div className="w-full sm:hidden overflow-hidden">
        <img
          src="/BusinessView/header.png"
          alt="Project"
          className="w-full h-auto object-cover"
        />
      </div>
        <div className="flex gap-3 py-2 mb-0 overflow-x-auto whitespace-nowrap 
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
        <div id="Gallery" ref={sectionRefs.Gallery}><Gallery /></div>
        <div id="PDFs" ref={sectionRefs.PDFs}><PDFs /></div>
        <div id="Courses" ref={sectionRefs.Courses}><Courses /></div>
        <div id="Events" ref={sectionRefs.Events}><Events /></div>
        <div id="Contact" ref={sectionRefs.Contact}><Contact /></div>
      </div>

    </div>
    </section>
  );
}
