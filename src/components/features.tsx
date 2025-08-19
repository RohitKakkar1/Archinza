import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  heading: string;
  items: string[];
    image: string; // URL or local image path
}

const FeaturesBus: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ask");

  const tabs = [
    { id: "ask", label: "Brand Page" },
    { id: "search", label: "Business Bot" },
    { id: "reach", label: "Archinza Gallery" },
    { id: "connect", label: "Business Insights" },
    { id: "recommend", label: "AI Matchmaking" },
  ];

  const tabContent: Record<string, TabContent> = {
    ask: {
      id: "ask",
      title: "Easy Onboarding",
      heading: "Your intelligent business page, built in minutes",
      items: [
        "We gather your details from across the web and turn them into a smart, structured, and searchable business page through a simple onboarding.",
        "• Architecture Firms",
        "• Interior Design Firms",
        "• Material Vendors",
        "• Product Vendors",
      ],
      image: "BusinessDBRen.png",
    },
    search: {
      id: "search",
      title: "Business Bot",
      heading: "Automate Conversations with Archinza AI",
      items: [
        "Archinza’s Business Bot brings AI support to your business, automating customer conversations and routing queries intelligently.",
        "• Your clients can chat directly with LTDf AI",
        "• Answers come from your past work & process",
        "• Be available 24/7 — even when you’re not",
      ],
      image: "Business_Bot.png",
    },
    reach: {
      id: "reach",
      title: "Archinza Gallery",
      heading: "Your Best Work, Showcased Automatically",
      items: [
        "A curated space that collects and showcases your best work, making your offerings easy to discover. Highlight your design vision, craftsmanship, and product applications with Archinza Gallery.",
      ],
      image: "Archinza_Gallery.png",
    },
    connect: {
      id: "connect",
      title: "Business Insights",
      heading: "Know What’s Getting You Noticed",
      items: [
        "Get real-time insights on reach, discovery, and interest. See what’s drawing attention, where you’re being viewed, and how people are finding you so you can stay one step ahead.",
      ],
      image: "Business_INsights.png",
    },
    recommend: {
      id: "recommend",
      title: "AI Matchmaking",
      heading: "Designed to Be Found",
      items: [
        "Be discoverable to people actively searching for what you offer. Archinza’s AI Matchmaking pairs your business with relevant searches and interests thus expanding your visibility.",
      ],
      image: "Recommendations.png",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-6 sm:p-8 min-h-[500px]">

    {/* Desktop Tabs */}
    <div className="hidden lg:block">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-black dark:bg-gray-200 rounded-full p-1 flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-lg dark:bg-gray-900 dark:text-white"
                  : "text-white hover:text-gray-300 dark:text-black dark:hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {tabContent[activeTab].heading}
          </h2>
          <div className="space-y-4">
            {tabContent[activeTab].items.map((item, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
            <img
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].heading}
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Cards */}
    <div className="flex flex-col space-y-8 lg:hidden">
      {tabs.map((tab) => {
        const content = tabContent[tab.id];
        return (
          <div
            key={tab.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4"
          >
            {content.image && (
              <img
                src={content.image}
                alt={content.heading}
                className="w-full rounded-lg object-contain"
              />
            )}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {content.heading}
            </h2>
            <div className="space-y-2 mb-4">
              {content.items.map((item, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>

  </div>
</div>


  );
};

export default FeaturesBus;