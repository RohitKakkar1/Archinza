import React from 'react';
import { ArrowRight } from 'lucide-react';

const sectionsData = [
  {
    id: 1,
    heading: 'Businesses that Design & Build',
    description:
      'Archinza Web helps businesses and individuals discover the right materials, connect with trusted vendors, and showcase their work.',
    tags: ['Design & Consult', 'Manufacture & Resell', 'Support Design'],
    image: '/Business/Architects.png',
    buttonText: 'Get Started on Archinza Web',
  },
  {
    id: 2,
    heading: 'Businesses that Manufacture & Resell',
    description:
      'Connect with verified vendors, browse materials with transparency, and save time on procurement.',
    tags: ['Verified Vendors', 'Transparent Pricing', 'Quick Connect'],
    image: '/Business/Manufactureres.png',
    buttonText: 'Explore Vendors',
  },
  {
    id: 3,
    heading: 'On-Site Professionals',
    description:
      'Build and manage your online portfolio directly on Archinza and attract new clients.',
    tags: ['Beautiful Profiles', 'Easy Updates', 'SEO Ready'],
    image: '/Business/Onsiteprofessionals.png',
    buttonText: 'Showcase Now',
  },
  {
    id: 3,
    heading: 'Businesses that Support Design',
    description:
      'Build and manage your online portfolio directly on Archinza and attract new clients.',
    tags: ['Beautiful Profiles', 'Easy Updates', 'SEO Ready'],
    image: '/Business/SupportDesigns.png',
    buttonText: 'Showcase Now',
  },
];

const WhoIsItFor: React.FC = () => {
  return (
    <section className="flex-1 ">
            {/* Header */}
        <div className="text-center bg-blue-100 mb-6 py-16 lg:mb-6 dark:bg-gray-800">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Archinza for different businesses
          </h2>
        </div>
      <div className="max-w-7xl mx-auto ">
        {sectionsData.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } items-center justify-center gap-8 lg:gap-12 h-auto lg:h-[70vh]`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-4 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                {section.heading}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {section.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden">
              <img
                src={section.image}
                alt={section.heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoIsItFor;
