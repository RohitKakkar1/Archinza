import React, { useMemo, useRef, useEffect } from "react"

export default function MasonryScroll() {
  const images = [
    "/HomeGrid/kitchen.png",
    "/HomeGrid/Wall.png",
    "/HomeGrid/skyscraper.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/kitchen.png",
    "/HomeGrid/camera.png",
    "/HomeGrid/camera.png",
    "/HomeGrid/camera.png",
    "/HomeGrid/camera.png",
    "/HomeGrid/camera.png",
  ]

  // Alternate between 2 and 1 images in columns
  const columns: string[][] = []
  let takeTwo = true
  for (let i = 0; i < images.length; ) {
    const take = takeTwo ? 2 : 1
    columns.push(images.slice(i, i + take))
    i += take
    takeTwo = !takeTwo
  }

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const firstColWidth = window.innerWidth / 2.5
      const secondColWidth = window.innerWidth / 1.5
      const offset = firstColWidth / 4 // center second column
      scrollRef.current.scrollLeft = firstColWidth - offset
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto p-2 bg-white scrollbar-hide"
    >
      <div className="flex h-[280px] gap-2">
        {columns.map((col, colIndex) => {
          const isSingle = col.length === 1
          return (
            <div
              key={colIndex}
              className="flex flex-col gap-2 flex-shrink-0"
              style={{
                width: isSingle
                  ? "calc(100vw / 1.5)"
                  : "calc(100vw / 2.5)", // single image column wider
              }}
            >
              {col.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`masonry-${colIndex}-${i}`}
                  className="w-full rounded-xl object-cover"
                  style={{
                    height: col.length === 1 ? "100%" : "calc(50% - 4px)", // split evenly if 2
                  }}
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
