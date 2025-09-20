import React, { useMemo } from "react";

type Category = "All" | "Architecture" | "Interior" | "Landscape" | "Product";

interface Item {
  id: string;
  image: string;
  category: Category;
  isAd?: boolean;
  advertiser?: string;
  title?: string;
  description?: string;
}

export default function MasonryGrid() {
  const baseItems: Item[] = useMemo(() => {
    const cats: Category[] = ["Architecture", "Interior", "Landscape", "Product"];
    const heights = [300, 350, 400, 450, 500];
    return Array.from({ length: 60 }).map((_, i) => ({
      id: `r-${i}`,
      image: `https://picsum.photos/seed/archinza${i}/400/${heights[i % heights.length]}`,
      category: cats[i % cats.length],
    }));
  }, []);

  const ads: Item[] = [
    {
      id: "ad-1",
      image: "https://picsum.photos/seed/ad1/600/380",
      category: "All",
      title: "Premium Laminates — 30% Off",
      description: "High quality finishes for modern spaces.",
      isAd: true,
      advertiser: "Archinza Ads",
    },
    {
      id: "ad-2",
      image: "https://picsum.photos/seed/ad2/600/420",
      category: "All",
      title: "Designer Lighting Collections",
      description: "Illuminate your project with curated pieces.",
      isAd: true,
      advertiser: "BrightCo",
    },    {
      id: "ad-3",
      image: "https://picsum.photos/seed/ad2/600/420",
      category: "All",
      title: "Designer Lighting Collections",
      description: "Illuminate your project with curated pieces.",
      isAd: true,
      advertiser: "BrightCo",
    },    {
      id: "ad-4",
      image: "https://picsum.photos/seed/ad2/600/420",
      category: "All",
      title: "Designer Lighting Collections",
      description: "Illuminate your project with curated pieces.",
      isAd: true,
      advertiser: "BrightCo",
    },    {
      id: "ad-5",
      image: "https://picsum.photos/seed/ad2/600/420",
      category: "All",
      title: "Designer Lighting Collections",
      description: "Illuminate your project with curated pieces.",
      isAd: true,
      advertiser: "BrightCo",
    },    {
      id: "ad-6",
      image: "https://picsum.photos/seed/ad2/600/420",
      category: "All",
      title: "Designer Lighting Collections",
      description: "Illuminate your project with curated pieces.",
      isAd: true,
      advertiser: "BrightCo",
    },
     {
      id: "ad-6",
      image: "https://picsum.photos/seed/ad2/600/420",
      category: "All",
      title: "Designer Lighting Collections",
      description: "Illuminate your project with curated pieces.",
      isAd: true,
      advertiser: "BrightCo",
    },
    
  ];

  const displayItems: Item[] = useMemo(() => {
    const arr: Item[] = [...baseItems];
    const adInterval = 6;
    let adIndex = 0;
    for (let i = adInterval; i < arr.length + adIndex && adIndex < ads.length; i += adInterval + 1) {
      arr.splice(i, 0, ads[adIndex]);
      adIndex++;
    }
    return arr;
  }, [baseItems, ads]);

  return (
    <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
      <style>{`
        .masonry {
          column-count: 2;
          column-gap: 0.5rem;
        }
        @media (min-width: 1024px) {
          .masonry {
            column-count: 3;
            column-gap: 0.5rem;
          }
        }
        .masonry-item {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          margin-bottom: 0.5rem;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="masonry px-2">
        {displayItems.map((it) =>
          it.isAd ? (
            <article
              key={it.id}
              className="masonry-item rounded-2xl overflow-hidden border border-yellow-100 bg-yellow-50 shadow-sm"
            >
              <img src={it.image} alt={it.title} className="w-full h-auto block" />
              <div className="p-3">
                <div className="text-xs text-yellow-700 font-semibold">Sponsored</div>
                <h3 className="mt-1 text-sm font-semibold text-gray-900">{it.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{it.description}</p>
                <div className="text-xs text-gray-500 mt-2">Ad by {it.advertiser}</div>
              </div>
            </article>
          ) : (
            <div
              key={it.id}
              className="masonry-item overflow-hidden rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <img src={it.image} alt="" className="w-full h-auto block" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
