import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sectionsData = [
    {
    id: 1,
    heading: 'AI Powered Personal Assisstant',
    description: 'Archinza helps you create your AI powered Archinza Page. Just provide us your Instagram, Website Link and Profile PDFs',
    image: '/Personal/Personal_Assisstant.png',
    buttonText: 'Explore',
  },
  {
    id: 2,
    heading: 'Ask anything from design to technical',
    description:
      '“How do I style a small room?” “What’s the ideal lighting for a workspace?” Get instant answers in one chat.',
    tags: ['Design & Consult', 'Manufacture & Resell', 'Support Design'],
    image: '/Personal/Design_Idea.png',
    buttonText: 'Get Started on Archinza Web',
  },
  {
    id: 3,
    heading: 'Save it for later',
    description:
      'Bookmark products, businesses and ideas so they’re ready when you are.',
    tags: ['Verified Vendors', 'Transparent Pricing', 'Quick Connect'],
    image: '/Personal/Material_Selection.png',
    buttonText: 'Explore Vendors',
  },

  {
    id: 4,
    heading: 'Search made simple',
    description: 'Some description for feature 4.',
    image: '/Personal/Visual_Discovery.png',
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
    <section className="flex-1 ">
            {/* Header */}
        <div className="text-center bg-blue-100 mb-6 py-16 lg:mb-6 dark:bg-gray-900">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            How we help you
          </h2>
        </div>
      <div className="max-w-7xl mx-auto ">
        {sectionsData.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } items-center justify-center gap-8 lg:gap-12 h-auto lg:h-[70vh]   mb-16 lg:mb-0`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-4 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                {section.heading}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {section.description}
              </p>
              
            </div>

            {/* Image Section */}
{section.video ? (
  <video
    src={section.video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full max-w-3xl mx-auto rounded-xl mb-4 
               h-[280px] sm:h-[400px] lg:h-[60vh] 
               object-contain bg-transparent"
  />
) : (
  <img
    src={section.image}
    alt={section.heading}
    className="w-full max-w-3xl mx-auto rounded-xl mb-4 
               h-[280px] sm:h-[320px] lg:h-[60vh] 
               object-contain bg-transparent"
  />
)}


          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
