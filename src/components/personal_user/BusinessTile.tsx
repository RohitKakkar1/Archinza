import { useRef } from "react"

type CardData = {
  id: number
  img: string
}

const cards: CardData[] = [
  {
    id: 0,
    img: "/PromotionTiles/1.png",
  },
  {
    id: 1,
    img: "/PromotionTiles/2.png",
  },
  {
    id: 2,
    img: "/PromotionTiles/3.png",
  },
]

export default function BusinessCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex font-sans flex-col w-full gap-2">
      {/* Category title */}
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold text-gray-800">Promotions</h2>
        <span className="text-xl">›</span>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto flex gap-3 scrollbar-none scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-72 h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition"
          >
            <img
              src={card.img}
              alt="Business"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
