import React, { useRef, useEffect } from "react"

export default function MasonryScroll() {
  const images = [
    "/BusinessView/LTDFPhotos/1.png",
    "/BusinessView/LTDFPhotos/2.png",
    "/BusinessView/LTDFPhotos/6.png",
    "/BusinessView/LTDFPhotos/7.png",
    "/BusinessView/LTDFPhotos/8.png",
    "/BusinessView/LTDFPhotos/21.png",
    "/BusinessView/LTDFPhotos/18.png",
    "/BusinessView/LTDFPhotos/20.png",
    "/BusinessView/LTDFPhotos/11.png",
    "/BusinessView/LTDFPhotos/22.png",
    "/BusinessView/LTDFPhotos/23.png",
    "/BusinessView/LTDFPhotos/24.png",
    "/BusinessView/LTDFPhotos/25.png",
    "/BusinessView/LTDFPhotos/26.png",
    "/BusinessView/LTDFPhotos/27.png",
    
    // ... you can keep adding more images
  ]

// Generate repeating cycle of [A, B, C], ensuring C is always 1st or 2nd
const generateColumns = () => {
  const cols: { type: string; imgs: string[] }[] = []
  let i = 0

  const cycle = ["A", "B", "C"]

  // Force startIndex so that "C" is at position 0 or 1
  let startIndex: number
  if (Math.random() < 0.5) {
    startIndex = 2 // C will be first
  } else {
    startIndex = 1 // C will be second
  }

  while (i < images.length) {
    for (let offset = 0; offset < cycle.length && i < images.length; offset++) {
      const type = cycle[(startIndex + offset) % cycle.length]

      if ((type === "A" || type === "B") && i + 1 < images.length) {
        cols.push({ type, imgs: [images[i], images[i + 1]] })
        i += 2
      } else if (type === "C" && i + 2 < images.length) {
        cols.push({ type, imgs: [images[i], images[i + 1], images[i + 2]] })
        i += 3
      } else {
        // fallback if not enough images left
        cols.push({ type: "A", imgs: [images[i]] })
        i++
      }
    }
  }

  return cols
}



  const columns = generateColumns()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto p-2 bg-white scrollbar-hide"
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
            )
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
            )
          }

          if (col.type === "C") {
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 flex-shrink-0"
                style={{ width: "calc(100vw / 2)" }}
              >
                <img
                  src={col.imgs[0]}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "50%" }}
                />
                <div className="flex h-[50%]">
  <img
    src={col.imgs[1]}
    className="w-1/2 object-cover rounded-xl pr-1"
  />
  <img
    src={col.imgs[2]}
    className="w-1/2 object-cover rounded-xl pl-1"
  />
</div>



              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
