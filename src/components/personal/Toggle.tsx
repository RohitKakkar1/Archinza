import React, { useEffect, useState } from 'react';

const SectionToggle: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('who-is-it-for');

  const tabs = [
    { id: 'who-is-it-for', label: 'Who is it for' },
    { id: 'features', label: 'Features' },
    { id: 'benefits', label: 'Benefits' },
  ];

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // Add offset for top bar
      let currentId = activeId;

      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            currentId = tab.id;
            break;
          }
        }
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  return (
<div className="sticky top-16 z-40 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md  px-4 sm:px-6 lg:px-8 py-3 rounded-b-xl shadow-sm">
  <div className="flex justify-center gap-4">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => scrollToSection(tab.id)}
        className={`px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-200 ${
          activeId === tab.id
            ? 'text-blue-600 font-semibold dark:text-blue-400'
            : 'text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>
  );
};

export default SectionToggle;
