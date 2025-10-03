import React, { useState, useEffect } from "react";

// Sample card data with 'type' added
const businessCards = [
  {
    id: 1,
    name: "Wriver",
    description:
      "Specializes in modern residential and commercial spaces, blending sustainable materials.",
    image: "/registered/17.png",
    tags: ["Architecture", "Interior Design", "Luxury Retail"],
    type: "Architecture Firm",
    link: "#",
  },
  {
    id: 2,
    name: "Delta Faucets",
    description:
      "Focused on adaptive reuse projects, transforming old structures into innovative, functional spaces.",
    image: "/registered/18.png",
    tags: ["Urban Design", "Renovation" , "Faucets", "Interiors"],
    type: "Design Consultancy",
    link: "#",
  },
  {
    id: 3,
    name: "Chirmee Interiors",
    description:
      "Offers sustainable landscape architecture and eco-friendly site planning for modern communities.",
    image: "/registered/19.png",
    tags: ["Landscape", "Sustainability", "Luxury Retail", "Luxury"],
    type: "Landscape Firm",
    link: "#",
  },
  {
    id: 4,
    name: "LTDF Studios",
    description:
      "Specializes in interior design for high-end hospitality projects, integrating local art and culture.",
    image: "/registered/17.png",
    tags: ["Interior Design", "Hospitality"],
    type: "Interior Design",
    link: "#",
  },
  {
    id: 5,
    name: "Fifth Business",
    description:
      "Delivers innovative mixed-use developments combining smart architecture with community-focused planning.",
    image: "/registered/18.png",
    tags: ["Mixed-Use", "Urban Planning"],
    type: "Urban Developer",
    link: "#",
  },
  {
    id: 6,
    name: "Sixth Business",
    description:
      "Delivers innovative mixed-use developments combining smart architecture with community-focused planning.",
    image: "/registered/18.png",
    tags: ["Mixed-Use", "Urban Planning"],
    type: "Urban Developer",
    link: "#",
  },
];

const BusinessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive behavior
  const updateCardsToShow = () => {
    if (window.innerWidth < 768) setCardsToShow(1);
    else if (window.innerWidth < 1024) setCardsToShow(2);
    else setCardsToShow(3);
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 > businessCards.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? businessCards.length - cardsToShow : prev - 1
    );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      <div className="text-center mb-6 lg:mb-6">
        <h2 className="text-3xl font-sans sm:text-4xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Businesses on Archinza
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Be a part of Archinza
        </p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Carousel cards */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
              width: `${(35 * businessCards.length) / cardsToShow}%`,
            }}
          >
            {businessCards.map((card) => (
              <div
                key={card.id}
                style={{
                  flex: `0 0 ${100 / businessCards.length * cardsToShow}%`,
                  boxSizing: "border-box",
                  padding: "0 0.5rem",
                }}
              >
                <div
                  onClick={() => window.location.href = card.link}
                  style={{
                    cursor: "pointer",
                    border: "1px solid #ddd",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    background: "#ffffffff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Soft shadow
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
<img
  src={card.image}
  alt={card.name}
  style={{
    width: "100%",
    height: "300px",
    objectFit: "cover",
    paddingLeft: "1rem",
    paddingRight: "1rem",
        paddingTop: "1rem",
  }}
/>

                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        color: "#0066ff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {card.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#555",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {card.type}
                    </span>
                    <p style={{ fontSize: "0.9rem", color: "#333" }}>
                      {card.description}
                    </p>
                    <div style={{ marginTop: "0.5rem" }}>
                      {card.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            display: "inline-block",
                            background: "#e6f0ff",
                            color: "#0066ff",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "0.5rem",
                            marginRight: "0.5rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons outside carousel */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "-50px", // outside the carousel
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "-50px", // outside the carousel
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default BusinessCarousel;
