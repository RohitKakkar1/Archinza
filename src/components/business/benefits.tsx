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


    </section>
  );
};

export default Benefits;
