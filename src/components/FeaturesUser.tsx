import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  heading: string;
  items: string[];
    image: string; // URL or local image path
}

const FeaturesUser: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ask');

  const tabs = [
    { id: 'search', label: 'Search' },
    { id: 'ask', label: 'Ask' },
    { id: 'save', label: 'Save' },
    { id: 'explore', label: 'Explore' }
  ];


  const tabContent: Record<string, TabContent> = {
    search: {
      id: 'search',
      title: 'Search, Made Smarter',
      heading: 'Search, Made Smarter',
      items: [
        'Find exactly what you’re looking for with Archinza’s intelligent text/ image based search. Whether it’s experts, products, services, or materials, our curated results simplify discovery.',
        'Discover people and businesses near you',
        'Search products, materials, and services instantly',
        'Get results tailored to your needs'

      ],
      image:'Personal_Features/Search.png'
    },
    ask: {
      id: 'ask',
      title: 'Ask, and Get Answers',
      heading: 'Ask, and Get Answers',
      items: [
        'Archinza’s WhatsApp bot gives you instant access to knowledge and support. Ask anything  from design questions to vendor details and get quick, accurate responses powered by our network and AI. ',
        'Ask queries anytime, anywhere',
        'Get instant guidance and trusted answers',
        'Stay connected without endless searching'

      ],
            image:'Personal_Features/Ask.png'
    },
    save: {
      id: 'save',
      title: 'Save, for Later',
      heading: 'Save, for Later',
      items: [
        'Keep track of what inspires you. Save your favorite people, products, or ideas into your personal space so they’re ready whenever you want to revisit or act on them.',
        'Save experts, products, and materials',
        'Organize your favorite finds easily ',
        'Access your list anytime on any device ',

      ],
            image:'Personal_Features/Save.png',
    },
    explore: {
      id: 'explore',
      title: 'Explore, Without Limits',
      heading: 'Explore, Without Limits',
      items: [
        'Archinza opens up a world of opportunities. Go beyond search to explore curated jobs, courses, events, and industry updates everything you need to grow and stay inspired in design and build.',
        'Find jobs, internships, and courses',
        'Stay updated with events and news',
        'Explore people, ideas, and innovations'
      ],
            image:'Personal_Features/Explore.png'
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

  {/* Desktop Section */}
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 min-h-[500px] hidden lg:block">
    {/* Tab Navigation */}
    <div className="flex justify-center mb-12">
      <div className="bg-black rounded-full p-1 flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white text-black shadow-lg'
                : 'text-white hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    {/* Content Area */}
    <div className="flex items-start justify-between">
      {/* Left Content */}
      <div className="flex-1 max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {currentContent.heading}
        </h2>
        <div className="space-y-4">
          {currentContent.items.map((item, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Right Mockup */}
      <div className="flex-1 max-w-md ml-8">
        <div className="  hover:rotate-0 transition-transform duration-300">
          {currentContent.image && (
            <img
              src={currentContent.image}
              alt={currentContent.heading}
              className="w-full max-w-md "
            />
          )}
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Section (cards) */}
  <div className="lg:hidden flex flex-col space-y-8">
    {tabs.map((tab) => {
      const content = tabContent[tab.id];
      return (
        <div
          key={tab.id}
          className="bg-white rounded-2xl shadow-md p-6"
        >
           {content.image && (
            <img
              src={content.image}
              alt={content.heading}
              className="w-full rounded-lg object-contain"
            />
          )}
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {content.heading}
          </h2>
          <div className="space-y-2 mb-4">
            {content.items.map((item, i) => (
              <p key={i} className="text-gray-700 text-sm leading-relaxed">
                {item}
              </p>
            ))}
          </div>
         
        </div>
      );
    })}
  </div>
</div>

  );
};

export default FeaturesUser;