import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhosItFor: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-sans sm:text-4xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Who's it for
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Archinza helps businesses connect, design professionals grow, and everyday 
            users discover what they need — quickly, and intelligently.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Archinza for Businesses */}
          <div className="space-y-6 rounded-2xl p-4 md:p-8 border border-gray-200 dark:border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
            {/* Image Container */}
            <div className="relative aspect-[1.9]  rounded-2xl overflow-hidden ">
              {/* Desktop Image */}
              <img 
                src="/images/Business_homepage.png"
                alt="Business professionals collaborating"
                className="hidden sm:block"
              />
              {/* Mobile Image */}
              <img 
                src="/images/Business_homepage.png"
                alt="Business team meeting"
                className="sm:hidden"
              />
            </div>


            {/* Content */}
            {/* Content */}
<div className="space-y-4 text-center sm:text-left">
  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-blue-600 dark:text-blue-400">
    Archinza for Businesses
  </h3>

  {/* Tags */}
  <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-2">
    <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
      Design & Consult
    </span>
    <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
      Support Design
    </span>
    <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
      Manufacture & Resell
    </span>
  </div>

  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
    Explore how Archinza helps businesses get found, find inspiration.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 pt-2">
    <Link to="http://174.138.123.146:9028/register/business/basic-details" target="_blank" rel="noopener noreferrer">
      <button className="group inline-flex items-center justify-center px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105">
        Get Started as a Business
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </Link>
    <button className="group inline-flex items-center justify-center w-fit px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full">
      Know More
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  </div>
</div>

          </div>

          {/* Archinza for Personal Use */}
          <div className="space-y-6 rounded-2xl p-4 md:p-8 border border-gray-200 dark:border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
            {/* Image Container */}
            <div className="relative  aspect-[1.9]  rounded-2xl overflow-hidden ">
              {/* Desktop Image */}
              <img 
                src="/images/Personal_homepage.png"
                alt="Person working on home design"
                className="hidden sm:block  "
              />
              {/* Mobile Image */}
              <img 
                src="/images/Personal_homepage.png"
                alt="Home interior design planning"
                className="sm:hidden  "
              />
            </div>

            {/* Content */}
            <div className="space-y-4 text-center sm:text-left justify-center sm:justify-start">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-blue-600 dark:text-blue-400">
                Archinza for Personal Use
              </h3>
                          {/* Tags */}
            <div className="flex flex-row flex-wrap gap-2">
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Working Professional
              </span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Students
              </span>
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Home-owner
              </span>
            </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Explore how Archinza helps businesses get found, find inspiration.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="http://174.138.123.146:9028/register/personal/basic-details"   target="_blank" rel="noopener noreferrer" >
                      <button className="group inline-flex items-center justify-center px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105">
                        Get Started as a Personal User
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                  </Link>
                
                <button className="group inline-flex items-center justify-center w-fit px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full">
                    Know More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhosItFor;