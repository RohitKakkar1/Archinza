import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";


export default function PersonalMasonryScroll() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/BusinessView/Wriver/1.jpg",
    "/BusinessView/Wriver/2.jpg",
    "/BusinessView/Wriver/6.jpg",
    "/BusinessView/Wriver/7.jpg",
    "/BusinessView/Wriver/8.jpg",
    "/BusinessView/Wriver/21.jpg",
    "/BusinessView/Wriver/18.jpg",
    "/BusinessView/Wriver/20.jpg",
    "/BusinessView/Wriver/11.jpg",
    "/BusinessView/Wriver/22.jpg",
    "/BusinessView/Wriver/23.jpg",
    "/BusinessView/Wriver/30.jpg",
    "/BusinessView/Wriver/30.jpg",
    "/BusinessView/Wriver/35.jpg",
  ];

  const generateColumns = () => {
    const cols: { type: string; imgs: string[] }[] = [];
    let i = 0;
    const cycle = ["C", "A", "B"];

    while (i < images.length) {
      for (let offset = 0; offset < cycle.length && i < images.length; offset++) {
        const type = cycle[offset % cycle.length];

        if ((type === "A" || type === "B") && i + 1 < images.length) {
          cols.push({ type, imgs: [images[i], images[i + 1]] });
          i += 2;
        } else if (type === "C" && i + 2 < images.length) {
          cols.push({ type, imgs: [images[i], images[i + 1], images[i + 2]] });
          i += 3;
        } else {
          cols.push({ type: "A", imgs: [images[i]] });
          i++;
        }
      }
    }
    return cols;
  };

  const columns = generateColumns();

  return (
    <div className="relative">
      {/* Back to Edit Button */}
            <button
        onClick={() => navigate("/wriver-edit")}
        className="absolute  pl-3 pr-1 py-2 h- top-4 left-4 z-30 bg-white/90 text-gray-900 rounded-full shadow-md text-base font-medium flex items-center  hover:bg-white/80 transition"
      >
        View Saves 
      <ChevronRight className="w-6 h-6" />

      </button>





      {/* Masonry Scroll Section */}
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

            

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
