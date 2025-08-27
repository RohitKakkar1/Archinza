import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function ResponsiveImageLayout() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/BusinessView/Wriver/1.jpg",
    "/BusinessView/Wriver/2.jpg",
    "/BusinessView/Wriver/6.jpg",
    "/BusinessView/Wriver/7.jpg",
    "/BusinessView/Wriver/8.jpg",
    "/BusinessView/Wriver/21.jpg",        // The dynamic input for the images to come here
    "/BusinessView/Wriver/18.jpg",
    "/BusinessView/Wriver/20.jpg",
    "/BusinessView/Wriver/11.jpg",
    "/BusinessView/Wriver/22.jpg",
    "/BusinessView/Wriver/23.jpg",
    "/BusinessView/Wriver/30.jpg",
    "/BusinessView/Wriver/30.jpg",
    "/BusinessView/Wriver/35.jpg",
  ];

  // Apply rules
  let displayImages: string[] = [];
  if (images.length === 14) {
    displayImages = images; // all 14
  } else if (images.length >= 7) {
    displayImages = images.slice(0, 7); // keep first 10
  } else {
    displayImages = images; // less than 7 → linear
  }

  const generateColumns = () => {
    const cols: { type: string; imgs: string[] }[] = [];
    let i = 0;
    const cycle = ["C", "A", "B"];

    while (i < displayImages.length) {
      for (let offset = 0; offset < cycle.length && i < displayImages.length; offset++) {
        const type = cycle[offset % cycle.length];

        if ((type === "A" || type === "B") && i + 1 < displayImages.length) {
          cols.push({ type, imgs: [displayImages[i], displayImages[i + 1]] });
          i += 2;
        } else if (type === "C" && i + 2 < displayImages.length) {
          cols.push({ type, imgs: [displayImages[i], displayImages[i + 1], displayImages[i + 2]] });
          i += 3;
        } else {
          cols.push({ type: "A", imgs: [displayImages[i]] });
          i++;
        }
      }
    }
    return cols;
  };

  const columns = generateColumns();

  const renderGrid = () => (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto p-2 bg-white dark:bg-gray-900 scrollbar-hide"
    >
      <div className="flex h-[320px] gap-2">
        {columns.map((col, idx) => {
          if (col.type === "A") {
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 flex-shrink-0"
                style={{ width: "calc(100vw / 3.8)" }}
              >
                <img
                  src={col.imgs[0]}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "35%" }}
                />
                {col.imgs[1] && (
                  <img
                    src={col.imgs[1]}
                    className="w-full object-cover rounded-xl"
                    style={{ height: "65%" }}
                  />
                )}
              </div>
            );
          }

          if (col.type === "B") {
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 flex-shrink-0"
                style={{ width: "calc(100vw / 3.8)" }}
              >
                <img
                  src={col.imgs[0]}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "65%" }}
                />
                {col.imgs[1] && (
                  <img
                    src={col.imgs[1]}
                    className="w-full object-cover rounded-xl"
                    style={{ height: "35%" }}
                  />
                )}
              </div>
            );
          }

          if (col.type === "C") {
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 flex-shrink-0"
                style={{ width: "calc(100vw / 2)" }}
              >
                <img
                  src={col.imgs[0]}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "50%" }}
                />
                <div className="flex h-[50%]">
                  <img
                    src={col.imgs[1]}
                    className="w-1/2 object-cover rounded-xl pr-1"
                  />
                  <img
                    src={col.imgs[2]}
                    className="w-1/2 object-cover rounded-xl pl-1"
                  />
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );

  const renderLinear = () => (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 snap-x snap-mandatory">
        {displayImages.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 snap-center"
            style={{ height: "320px" }}
          >
            <img src={src} className="h-full object-contain rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      {/* Back to Edit Button */}
      <button
        onClick={() => navigate("/wriver-edit")}
        className="absolute pl-1 pr-3 py-2 top-4 left-4 z-30 bg-white/90 text-gray-900 rounded-full shadow-md text-base font-medium flex items-center hover:bg-white/80 transition"
      >
        <ChevronLeft className="w-6 h-6" />
        Edit
      </button>

      {/* Conditional Render */}
      {displayImages.length >= 7 ? renderGrid() : renderLinear()}
    </div>
  );
}
