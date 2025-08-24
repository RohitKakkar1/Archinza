import { useState } from "react";

const images = [
  "/BusinessView/1.jpg",
  "/BusinessView/2.jpg",
  "/BusinessView/3.jpg",
  "/BusinessView/4.jpg",
  "/BusinessView/5.jpg",
];

export default function GalleryUnit() {
  const [active, setActive] = useState(0);

  return (
   <section className="max-w-7xl mx-auto px-4 py-2">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-l font-medium dark:text-white">Project Photos & Renders</h2>
    <a href="#" className="text-blue-500 text-sm font-medium">View All</a>
  </div>

  {/* Desktop */}
  <div className="hidden sm:flex gap-2 h-[300px]">
    {images.map((src, i) => (
      <div
        key={i}
        onMouseEnter={() => setActive(i)}
        className={`relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer
          ${active === i ? "flex-[3]" : "flex-[1]"}`}
      >
        <img
          src={src}
          alt={`Project ${i}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* Mobile (full-width swipe scroll) */}
<div className="w-full sm:hidden overflow-hidden">
  <img
    src="/BusinessView/mobilegrid.png"
    alt="Project"
    className="w-full h-auto object-cover"
  />
</div>




</section>

  );
}
