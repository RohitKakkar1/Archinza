import React from 'react';
import { ArrowRight } from 'lucide-react';

const WebOffering: React.FC = () => {
  return (
    <section className="flex-1  px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="max-w-7xl   mx-auto">
    {/* Header */}
        <div className="text-center mb-6 lg:mb-6">
          <h2 className="text-3xl font-sans sm:text-4xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Our Offerings
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <b>Search, Reach, Ask, Connect</b><br />
              On the web or through our WhatsApp bot, Archinza delivers relevant services, products, people, and answers instantly on demand.          </p>
        </div>
        
        <div className="grid items-center h-[70vh] flex flex-col-reverse lg:flex-row justify-center lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  
                    {/* Visual Section */}
          <div className="relative aspect-video  rounded-2xl overflow-hidden ">
              {/* Desktop Image */}
              <img 
                src="/images/Web_offering.png"
                alt="Business professionals collaborating"
                className="hidden sm:block"
              />
              {/* Mobile Image */}
              <img 
                src="/images/Web_offering.png"
                alt="Business team meeting"
                className="sm:hidden"
              />
            </div>
          {/* Content Section */}
          <div className="space-y-6 lg:space-y-4">
            <h1 className="text-3xl font-sans sm:text-4xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-tight">
              Archinza AI Web
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
Browse curated businesses, explore products, materials, expertise, save inspirations, all through an AI-powered platform.            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              
              <button className="group inline-flex items-center justify-center px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                Get Started on Archinza Web
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full">
                Know More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default WebOffering;