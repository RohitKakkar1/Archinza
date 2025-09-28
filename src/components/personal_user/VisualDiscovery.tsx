import React, { useState } from "react";
import ChatPopup from "./SearchResults/ChatPopup";

const cards = [
  {
    title: "Product Search",
    text: "Find product and materials on the go",
    img: "/Personal_user/ProductSearch/product-search.png",
    bg: "bg-orange-50",
    recommended: [
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Wood Samples" },
      { img: "/Personal_user/ProductSearch/material-search.png", title: "Tiles" },
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Paints" },
    ],
    matchmade: [
      { img: "/Personal_user/DesignBuild/archom.png", title: "Ace Woodworks", description: "High quality wood for interiors" },
      { img: "/Personal_user/DesignBuild/lotus.png", title: "Cera Ceramics", description: "Durable tiles for flooring" },
      { img: "/Personal_user/DesignBuild/ltdf.png", title: "Shalimar Paints", description: "Non-toxic paints for home" },
    ],
  },
  {
    title: "Material Search",
    text: "Get your architecture portfolio reviewed",
    img: "/Personal_user/ProductSearch/material-search.png",
    bg: "bg-green-50",
    recommended: [
      { img: "/Personal_user/ProductSearch/material-search.png", title: "Concrete Types" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Glass" },
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Steel" },
    ],
    matchmade: [
      { img: "/Personal_user/ProductSearch/material-search.png", title: "Concrete Mix", description: "Best mix for structures" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Tempered Glass", description: "Strong glass panels" },
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Steel Rods", description: "High strength rods" },
    ],
  },
  {
    title: "Industry Professionals",
    text: "Discover professionals & firms to collaborate",
    img: "/Personal_user/ProductSearch/technical-queries.png",
    bg: "bg-blue-50",
    recommended: [
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Architects" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Interior Designers" },
      { img: "/Personal_user/ProductSearch/material-search.png", title: "Contractors" },
    ],
    matchmade: [
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Studio A", description: "Expert architects for residential" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Design Co", description: "Interior design specialists" },
      { img: "/Personal_user/ProductSearch/material-search.png", title: "BuildMaster", description: "Reliable contractors" },
    ],
  },
  {
    title: "Design Doubts",
    text: "We’ll guide you with design suggestions",
    img: "/Personal_user/ProductSearch/design-doubts.png",
    bg: "bg-amber-100",
    recommended: [
      { img: "/Personal_user/ProductSearch/design-doubts.png", title: "Living Room Layouts" },
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Kitchen Designs" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Lighting Ideas" },
    ],
    matchmade: [
      { img: "/Personal_user/ProductSearch/design-doubts.png", title: "Modern Living", description: "Tips for cozy living rooms" },
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Kitchen Pro", description: "Smart kitchen layouts" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Lighting Lux", description: "Best lighting setups" },
    ],
  },
  {
    title: "Technical Doubts",
    text: "Get answers to your technical questions",
    img: "/Personal_user/ProductSearch/technical-queries.png",
    bg: "bg-gray-200",
    recommended: [
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Electrical Wiring" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Plumbing Tips" },
      { img: "/Personal_user/ProductSearch/material-search.png", title: "HVAC Solutions" },
    ],
    matchmade: [
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Wiring Guide", description: "Safe wiring practices" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Plumbing Pro", description: "Fix leaks easily" },
      { img: "/Personal_user/ProductSearch/material-search.png", title: "HVAC Experts", description: "Cooling & heating solutions" },
    ],
  },
  {
    title: "Technical Discovery",
    text: "Get answers to your technical questions",
    img: "/Personal_user/ProductSearch/technical-queries.png",
    bg: "bg-gray-200",
    recommended: [
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Building Codes" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Material Standards" },
      { img: "/Personal_user/ProductSearch/design-doubts.png", title: "Construction Tips" },
    ],
    matchmade: [
      { img: "/Personal_user/ProductSearch/technical-queries.png", title: "Code Handbook", description: "Regulations & standards" },
      { img: "/Personal_user/ProductSearch/product-search.png", title: "Material Guide", description: "Best practices" },
      { img: "/Personal_user/ProductSearch/design-doubts.png", title: "Construction Insights", description: "Pro tips" },
    ],
  },
];

export default function VisualDiscovery() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-700">What all you can do</h2>
        <div>
          <p>Ask or Search about various topics</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-2xl p-2 ${card.bg} shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full`}
            onClick={() => setSelectedCard(card)}
          >
            <div className="w-full h-20 flex items-center justify-center mb-3">
              <img
                src={card.img}
                alt={card.title}
                className="max-h-full max-w-full object-contain rounded-md"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between">
              <h3 className="text-base font-semibold text-gray-800">{card.title}</h3>
            </div>
            <div>
              <p className="text-sm font-regular text-gray-800">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <ChatPopup
          cardTitle={selectedCard.title}
          recommended={selectedCard.recommended}
          matchmade={selectedCard.matchmade}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </section>
  );
}
