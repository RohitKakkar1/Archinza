import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sectionsData = [
  {
    id: 1,
    heading: 'Get found by people searching for services like yours',
    description:
      'Archinza Web helps businesses and individuals discover the right materials, connect with trusted vendors, and showcase their work.',
    tags: ['Design & Consult', 'Manufacture & Resell', 'Support Design'],
    image: '/Business/Search.png',
    buttonText: 'Get Started on Archinza Web',
  },
  {
    id: 2,
    heading: 'AI that answers for your Business, to anyone, anytime',
    description:
      'Connect with verified vendors, browse materials with transparency, and save time on procurement.',
    tags: ['Verified Vendors', 'Transparent Pricing', 'Quick Connect'],
    image: '/Business/AIBusinessBot.png',
    buttonText: 'Explore Vendors',
  },
  {
    id: 3,
    heading: 'Receive Business enquires from Clients',
    description: 'Some description for feature 3.',
    image: '/Business/AIBusinessBot.png',
    buttonText: 'Explore',
  },
  {
    id: 4,
    heading: 'Feature 4 Title',
    description: 'Some description for feature 4.',
    image: '/Business/AIBusinessBot.png',
    buttonText: 'Explore',
  },
];

const Benefits: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth * 0.8;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.offsetWidth < container.scrollWidth - 5
      );
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollButtons);
    return () => container.removeEventListener('scroll', updateScrollButtons);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center bg-blue-100 mb-6 py-16 dark:bg-gray-900">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600  dark:text-blue-400">
          What all we offer
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-visible no-scrollbar scroll-smooth px-8 pb-12"
          style={{
            scrollSnapType: 'x mandatory',
            paddingBottom: '24px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {sectionsData.map((section) => (
            <div
              key={section.id}
              className="min-w-[80%] max-w-[80%] lg:min-w-[45%] lg:max-w-[45%] flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 scroll-snap-align-start"
            >
              <div className="mb-4">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-[320px] object-contain rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {section.heading}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {section.description}
                </p>
              </div> 
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Benefits;
