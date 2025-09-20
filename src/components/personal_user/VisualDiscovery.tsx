import React from "react";

const cards = [
  {
    title: "Product Search",
    text: "Find product and materials on the go",
    img: "/Personal_user/ProductSearch/product-search.png",
    bg: "bg-orange-50",
  },
    {
    title: "Material Search",
    text: "Get your architecture portfolio reviewed",
    img: "/Personal_user/ProductSearch/material-search.png",
    bg: "bg-green-50",
  },
  {
    title: "Industry Professionals",
    text: "Discover professionals & firms to collaborate",
    img: "/Personal_user/ProductSearch/technical-queries.png",
    bg: "bg-blue-50",
  },

  {
    title: "Design Doubts",
    text: "We’ll guide you with design suggestions",
    img: "/Personal_user/ProductSearch/design-doubts.png",
    bg: "bg-amber-100",
  },
  {
    title: "Technical Doubts",
    text: "Get answers to your technical questions",
    img: "/Personal_user/ProductSearch/technical-queries.png",
    bg: "bg-gray-200",
  },
    {
    title: "Technical Discovery",
    text: "Get answers to your technical questions",
    img: "/Personal_user/ProductSearch/technical-queries.png",
    bg: "bg-gray-200",
  },



];

export default function VisualDiscovery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
            <div className="mb-4">
          <h2 className="text-base font-bold text-gray-700">
            What all you can do
          </h2>
          <div><p>Ask or Search about various topics</p></div>
      </div>

<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
  {cards.map((card, i) => (
    <div
      key={i}
      className={`flex flex-col rounded-2xl p-2 ${card.bg} shadow-sm hover:shadow-md transition-shadow h-full`}
    >
      <div className="w-full h-20 flex items-center justify-center mb-3">
        <img
          src={card.img}
          alt={card.title}
          className="max-h-full max-w-full object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="text-base font-semibold text-gray-800">
          {card.title}
        </h3>
      </div>
     <div><p className="text-sm font-regular text-gray-800">{card.text}</p></div> 
    </div>
  ))}
</div>

    </section>
  );
}
