import { useState, useRef, useEffect } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

type CardData = {
  id: number
  title: string
  subtitle: string
  img: string
  buttonText: string
  color: string
}

const cards: CardData[] = [
  {
    id: 0,
    title: "Have a Business in the AECD Industry?",
    subtitle: "Increase the business visibility.",
    img: "/image1.png",
    buttonText: "Register on Archinza",
    color: "bg-blue-900",
  },
  {
    id: 1,
    title: "Expand Your Reach to New Clients",
    subtitle: "Get discovered by potential customers.",
    img: "/image2.png",
    buttonText: "Sign Up Now",
    color: "bg-gray-600",
  },
  {
    id: 2,
    title: "Boost Your Online Presence",
    subtitle: "Stand out among competitors.",
    img: "/image3.png",
    buttonText: "Join Archinza",
    color: "bg-orange-800",
  },
    {
    id: 2,
    title: "Boost Your Online Presence",
    subtitle: "Stand out among competitors.",
    img: "/image3.png",
    buttonText: "Join Archinza",
    color: "bg-orange-800",
  },
    {
    id: 2,
    title: "Boost Your Online Presence",
    subtitle: "Stand out among competitors.",
    img: "/image3.png",
    buttonText: "Join Archinza",
    color: "bg-orange-800",
  },
]

export default function BusinessCarousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cards.length / 2))
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Center a card in the viewport
  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current
    const card = cardRef.current
    if (carousel && card) {
      const containerWidth = carousel.offsetWidth
      const cardWidth = card.offsetWidth + 8 // 12px = gap-3
      const scrollPosition =
        index * cardWidth - containerWidth / 2 + cardWidth / 2

      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  // Initial scroll to center card
  useEffect(() => {
    scrollToCard(Math.floor(cards.length / 2))
  }, [])

  // Update active index while scrolling
  useEffect(() => {
    const carousel = carouselRef.current
    const card = cardRef.current
    if (!carousel || !card) return

    const onScroll = () => {
      const cardWidth = card.offsetWidth + 12 // gap-3
      const index = Math.round(
        (carousel.scrollLeft + carousel.offsetWidth / 2 - cardWidth / 2) /
          cardWidth
      )
      setActiveIndex(index)
    }

    carousel.addEventListener("scroll", onScroll)
    return () => carousel.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="w-full px-4">
      <h2 className="pb-4 font-medium">Businesses on Archinza</h2>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto flex gap-3 scrollbar-none scroll-smooth"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={index === 0 ? cardRef : null}
            className={`flex-shrink-0 w-72 ${card.color} rounded-xl p-4 shadow-lg flex items-center cursor-pointer hover:opacity-90 transition`}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-4">
                <p className="text-white font-medium text-xs sm:text-base">
                  {card.title}
                </p>
                <p className="text-white font-regular text-xs sm:text-base">
                  {card.subtitle}
                </p>
              </div>

              <button className="flex items-center justify-center text-gray-200 font-medium text-sm py-1.5 rounded-full w-max hover:bg-gray-100 transition">
                {card.buttonText}
                <ArrowRightIcon className="w-3 h-3 ml-1.5" />
              </button>
            </div>
            <img
              src={card.img}
              alt="Business"
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
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
              activeIndex === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}
