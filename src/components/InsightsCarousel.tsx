import { useState, useRef, useEffect } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

type CardData = {
  id: number
  title: string
  subtitle: string
  img?: string
  buttonText: string
  color: string
}

const cards: CardData[] = [
  {
    id: 0,
    title: "What users are asking",
    subtitle: "See the latest queries from clients.",
    img: "/BusinessView/queries.png", // your uploaded image
    buttonText: "See queries",
    color: "bg-gray-900",
  },
  {
    id: 1,
    title: "Improve your profile",
    subtitle: "Complete your profile to appear 2x more in searches.",
    img: "/BusinessView/profile.png",
    buttonText: "Update Profile",
    color: "bg-orange-700",
  },
  {
    id: 2,
    title: "Get more visibility",
    subtitle: "Boost your business with Archinza AI recommendations.",
    img: "/BusinessView/boost.png",
    buttonText: "Learn More",
    color: "bg-blue-800",
  },
]

export default function BusinessCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const cardWidth = carousel.scrollWidth / cards.length
    const scrollPosition = index * cardWidth
    carousel.scrollTo({ left: scrollPosition, behavior: "smooth" })
    setActiveIndex(index)
  }

  return (
    <div className="w-full">


      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto flex gap-3 scrollbar-none scroll-smooth"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`flex-shrink-0 w-72 ${card.color} rounded-xl gap-3 p-4 shadow-lg flex items-center cursor-pointer hover:opacity-90 transition`}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-4">
                <p className="text-orange-300 font-semibold text-xs">+ Notification</p>
                <p className="text-white font-medium text-base">{card.title}</p>
                <p className="text-gray-200 font-light text-sm">{card.subtitle}</p>
              </div>
              <button className="flex items-center justify-center bg-white text-gray-900 font-medium text-sm px-3 py-1.5 rounded-full w-max hover:bg-gray-200 transition">
                {card.buttonText}
                <ArrowRightIcon className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
            {card.img && (
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 object-contain opacity-80"
              />
            )}
          </div>
        ))}
      </div>

      {/* Slider dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, idx) => (
          <span
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              activeIndex === idx ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}
