import React, { useState } from "react";
import { Bookmark } from "lucide-react"; // Heart icon
import ImagePopup from "./ImagePopup";

interface GalleryImage {
  src: string;
  author: string;
}

interface Filter {
  src: string;
  label: string;
}

interface MasonryGridProps {
  images: GalleryImage[];
  filters?: Filter[];
}

export default function MasonryGrid({ images, filters }: MasonryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [savedImages, setSavedImages] = useState<number[]>([]); // store saved image indexes

  const toggleSave = (index: number) => {
    setSavedImages((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar px-2">
      <style>{`
        .masonry {
          column-count: 2;
          column-gap: 0.5rem;
        }
        @media (min-width: 1024px) {
          .masonry {
            column-count: 4;
          }
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 0.5rem;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Filters */}
      {filters && filters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.map((filter, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-1 py-1 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <img src={filter.src} alt={filter.label} className="w-6 h-6 rounded-full object-cover" />
              <span className="text-sm text-gray-700 dark:text-gray-200">{filter.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="masonry">
        {images.map((img, i) => (
          <div
            key={i}
            className="masonry-item cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 dark:border-gray-700"
          >
            <img
              src={img.src}
              alt={img.author}
              className="w-full h-auto block"
              onClick={() => setSelectedImage(img)}
            />
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full border border-gray-400 dark:border-gray-600"></span>
                <p className="text-sm text-gray-600 dark:text-gray-300">{img.author}</p>
              </div>

              {/* Heart icon next to business name */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleSave(i); }}
                className={`transition-colors ${
                  savedImages.includes(i) ? "text-red-600" : "text-gray-400 hover:text-red-600"
                }`}
              >
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImagePopup
          src={selectedImage.src}
          author={selectedImage.author}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
