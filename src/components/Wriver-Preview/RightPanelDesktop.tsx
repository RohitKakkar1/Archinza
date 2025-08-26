import { useState } from "react";
import Gallery from "./Gallery";
import PDFs from "./PDFs";
import Courses from "./Courses";
import Events from "./Events";
import Contact from "./Contact";
import { section } from "framer-motion/client";
import AboutMobile from "./AboutMobile";

export default function RightPanelDesktop() {
  const tabs = ["Gallery", "PDFs", "Courses", "Events",  "Contact"];
  const [active, setActive] = useState("Gallery");

  return (
    <section>

       <div className="block lg:hidden">
  {/* Tabs */}
  {/* Tabs */}
<div className="sticky top-0 z-20 bg-white">
  <div className="flex gap-3 mb-6 overflow-x-auto whitespace-nowrap 
                  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActive(tab)}
        className={`px-5 py-2 rounded-full border text-sm font-medium transition 
          ${active === tab ? "bg-orange-500 text-white" : "bg-white hover:bg-gray-100"}`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>


</div>


      {/* Show on Mobile */}
      <div className="block lg:hidden">
        <AboutMobile />
      </div>

    <div className="w-full lg:w-fit">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition 
              ${active === tab ? "bg-orange-500 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {active === "Gallery" && <Gallery />}
      {active === "PDFs" && <PDFs />}
      {active === "Courses" && <Courses />}
      {active === "Events" && <Events />}
      {active === "Contact" && <Contact />}
    </div>
    </section>
  );
}
