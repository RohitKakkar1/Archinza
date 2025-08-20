import React from 'react';
import { ArrowRight } from 'lucide-react';

const sectionsData = [
  {
    id: 1,
    heading: 'Business/ Firm Owners',
    description:
      'Find professionals, products, materials and services for your projects, all in one place. Connect with businesses on demand, use the Ask Anything WhatsApp bot for quick answers, and explore more on Archinza Web.',
    tags: ['Design & Consult', 'Manufacture & Resell', 'Support Design'],
    image: '/Personal/Owner.webp',
    buttonText: 'Get Started on Archinza Web',
  },
  {
    id: 2,
    heading: 'Working Professionals',
    description:
      'Save time with AI-powered search for curated products and project needs. For quick design questions, use instant queries on WhatsApp. Explore jobs and upskill all without endless browsing.',
    tags: ['Verified Vendors', 'Transparent Pricing', 'Quick Connect'],
    image: '/Personal/Working.png',
    buttonText: 'Explore Vendors',
  },
  {
    id: 3,
    heading: 'Freelancer/ Artists',
    description:
      'Looking to bring your projects to life? Reach the right businesses, search products and materials, find inspiration, and get quick answers, all on Archinza Web and the Ask Anything WhatsApp bot.',
    tags: ['Beautiful Profiles', 'Easy Updates', 'SEO Ready'],
    image: '/Personal/Artist.png',
    buttonText: 'Showcase Now',
  },
  {
    id: 4,
    heading: 'Students',
    description:
      'Find courses, resources, materials, products and projects to explore, all in one place. Get quick answers with the Ask Anything WhatsApp bot, and explore more on Archinza Web.',
    tags: ['Beautiful Profiles', 'Easy Updates', 'SEO Ready'],
    image: '/Personal/Students.png',
    buttonText: 'Showcase Now',
  },
    {
    id: 5,
    heading: 'Homeowners / DIY Enthusiast',
    description:
      'Looking to upgrade your space or get inspired? Discover businesses, products, and materials, get quick answers with the Ask Anything WhatsApp bot, and explore more on Archinza Web.',
    tags: ['Beautiful Profiles', 'Easy Updates', 'SEO Ready'],
    image: '/Personal/Home.png',
    buttonText: 'Showcase Now',
  },
];

const WhoIsItFor: React.FC = () => {
  return (
    <section className="flex-1 ">
            {/* Header */}
        <div className="text-center bg-blue-100 mb-6 py-16 lg:mb-6 dark:bg-gray-900">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Archinza for Individuals
          </h2>
          <p className='font-sans dark:text-gray-400'>Dive in for free and explore the world of design, ideas, products, and inspiration with Archinza.</p>
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
