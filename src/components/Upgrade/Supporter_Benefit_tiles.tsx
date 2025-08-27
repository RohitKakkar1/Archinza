import { useState, useRef, useEffect } from "react"

type CardData = {
  id: number
  text: string
  img: string
}

const cards: CardData[] = [
  {
    id: 0,
    text: "Have a Business in the AECD Industry?",
    img: "/BusinessView/Build_Install.png",
  },
  {
    id: 1,
    text: "Increase the business visibility.",
    img: "/BusinessView/Build_Install.png",
  },
  {
    id: 2,
    text: "Register on Archinza Today!",
    img: "/BusinessView/Build_Install.png",
  },
]

export default function Benefit_tiles() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cards.length / 2))
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Center a card in the viewport
  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current
    const card = cardRef.current
    if (carousel && card) {
      const containerWidth = carousel.offsetWidth
      const cardWidth = card.offsetWidth + 8 // gap-3
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

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto flex gap-3 scrollbar-none scroll-smooth"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={index === 0 ? cardRef : null}
            className="flex-shrink-0 w-72 relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={card.img}
              alt="Business"
              className="w-full h-44 object-cover"
            />
            <div className="absolute bottom-3 left-3 text-white text-sm sm:text-base font-medium drop-shadow-md">
              {card.text}
            </div>
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
