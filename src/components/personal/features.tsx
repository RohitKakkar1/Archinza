import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sectionsData = [
    {
    id: 1,
    heading: 'Create your Archinza Business Page',
    description: 'Archinza helps you create your AI powered Archinza Page. Just provide us your Instagram, Website Link and Profile PDFs',
    video: '/Business/Scraper_Illustration.mp4',
    buttonText: 'Explore',
  },
  {
    id: 2,
    heading: 'Get found by people searching for services like yours',
    description:
      'Archinza Web helps businesses and individuals discover the right materials, connect with trusted vendors, and showcase their work.',
    tags: ['Design & Consult', 'Manufacture & Resell', 'Support Design'],
    video: '/Business/Search.mp4',
    buttonText: 'Get Started on Archinza Web',
  },
  {
    id: 3,
    heading: 'AI that answers for your Business, to anyone, anytime',
    description:
      'Connect with verified vendors, browse materials with transparency, and save time on procurement.',
    tags: ['Verified Vendors', 'Transparent Pricing', 'Quick Connect'],
    image: '/Business/AIBusinessBot.png',
    buttonText: 'Explore Vendors',
  },

  {
    id: 4,
    heading: 'Feature 4 Title',
    description: 'Some description for feature 4.',
    image: '/Business/AIBusinessBot.png',
    buttonText: 'Explore',
  },
];

const Features: React.FC = () => {
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
    <section className=" lg:px-8 py-12">
      <div className="text-center bg-blue-100 mb-6 py-16 dark:bg-gray-800">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600  dark:text-blue-400">
          What all we offer
        </h2>
      </div>

      <div
  ref={scrollRef}
  className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-visible no-scrollbar scroll-smooth px-4 sm:px-4 pb-8 sm:pb-12"
  style={{
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }}
>
  {sectionsData.map((section) => (
    <div
      key={section.id}
      className="min-w-[85%] max-w-[85%] sm:min-w-[85%] sm:max-w-[85%] lg:min-w-[45%] lg:max-w-[45%] flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-4 scroll-snap-align-start"
    >
      <div className="mb-4">
{section.video ? (
  <video
    src={section.video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full rounded-xl mb-4 
               h-[280px] sm:h-[400px] lg:h-[60vh] 
               object-cover"
  />
) : (
  <img
    src={section.image}
    alt={section.heading}
    className="w-full rounded-xl mb-4 
               h-[280px] sm:h-[320px] lg:h-[60vh] 
               object-cover"
  />
)}
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-white mt-3">
          {section.heading}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
          {section.description}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Features;
