import React from "react";

export default function ScrollSlider() {
  const images = [
    "/BusinessView/DeltaFaucet/1.jpg",
    "/BusinessView/DeltaFaucet/2.jpg",
    "/BusinessView/DeltaFaucet/6.jpg",
    "/BusinessView/DeltaFaucet/7.jpg",
    "/BusinessView/DeltaFaucet/8.jpg",
  ]; // top 5 only

  return (
    <div className="relative w-full">
      {/* Scrollable images */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 snap-x snap-mandatory">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 snap-center"
              style={{ height: "320px" }}
            >
              <img
                src={src}
                className="h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* View Gallery button - stays fixed in bottom-right of this component */}
      <button className="absolute font-sans bottom-3 right-3 bg-white/50 text-gray-800 px-3 py-2 rounded-lg border shadow-sm text-sm hover:bg-white hover:shadow-md transition">
        View Gallery
      </button>
    </div>
  );
}
