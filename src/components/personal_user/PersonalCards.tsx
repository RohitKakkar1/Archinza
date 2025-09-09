import { useState, useRef, useEffect } from "react";

type PersonalCardData = {
  id: number;
  type: string;
  images: string[];
  saves: number;
  time: string;
};

const cards: PersonalCardData[] = [
  {
    id: 0,
    type: "Jobs for you",
    images: [
      "/BusinessView/Chirmee/1.jpg",
      "/BusinessView/Chirmee/2.jpg",
      "/BusinessView/Chirmee/6.jpg",
    ],
    saves: 20,
    time: "2 mo",
  },
  {
    id: 1,
    type: "Build or Install",
    images: [
      "/BusinessView/DeltaFaucet/1.jpg",
      "/BusinessView/DeltaFaucet/2.jpg",
      "/BusinessView/DeltaFaucet/6.jpg",
    ],
    saves: 20,
    time: "2 mo",
  },
  {
    id: 2,
    type: "Sell Products or Materials",
    images: [
      "/BusinessView/Wriver/1.jpg",
      "/BusinessView/Wriver/2.jpg",
      "/BusinessView/Wriver/6.jpg",
    ],
    saves: 15,
    time: "1 mo",
  },
  {
    id: 3,
    type: "Manufacture or Distribute",
    images: [
      "/BusinessView/Wriver/1.jpg",
      "/BusinessView/Wriver/2.jpg",
      "/BusinessView/Wriver/6.jpg",
    ],
    saves: 15,
    time: "1 mo",
  },
    {
    id: 4,
    type: "Support Services",
    images: [
      "/BusinessView/Wriver/1.jpg",
      "/BusinessView/Wriver/2.jpg",
      "/BusinessView/Wriver/6.jpg",
    ],
    saves: 15,
    time: "1 mo",
  },
];

export default function PersonalCategories() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex font-sans flex-col w-full gap-2 py-4">
      {/* Category Title */}
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold text-gray-800">Businesses</h2>
        <span className="text-xl">›</span>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto flex gap-4 scrollbar-none scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-48 rounded-xl cursor-pointer"
          >
            {/* Image collage */}
            <div className="grid grid-cols-3 grid-rows-2 gap-1 rounded-xl overflow-hidden">
              {/* Large left image */}
              <img
                src={card.images[0]}
                alt={`${card.type}-main`}
                className="col-span-2 row-span-2 object-cover w-full h-32"
              />
              {/* Two stacked right images */}
              <img
                src={card.images[1]}
                alt={`${card.type}-sub1`}
                className="object-cover w-full h-16"
              />
              <img
                src={card.images[2]}
                alt={`${card.type}-sub2`}
                className="object-cover w-full h-16"
              />
            </div>

            {/* Text */}
            <div className="mt-2">
              <h3 className="text-sm font-medium">{card.type}</h3>
              <p className="text-xs text-gray-500">
                {card.saves} Saves · {card.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
