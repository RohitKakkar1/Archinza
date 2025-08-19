import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';


const Bus_Offering: React.FC = () => {
  return (
    <section className="flex-1  px-4 sm:px-6 lg:px-8 py-8 lg:py-32">
      <div className="max-w-7xl mx-auto grid items-center gap-8 lg:gap-12 lg:grid-cols-[40%_60%]">
        
        {/* Text Content - 40% */}
        <div className="w-full space-y-6">
          <div className="w-full text-black dark:text-white ">
            <h2 className="text-xl sm:text-4xl lg:text-4xl font-sans font-medium	 text-gray-900 dark:text-white leading-tight ">
              Get found by {' '}
              
              <span className="text-orange-500">
                <Typewriter
                  words={['Clients' , 'Vendors', 'Students']}
                  loop={true}
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={250}
                />
              </span>{' '}
            </h2>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl font-sans font-medium	 text-gray-900 dark:text-white leading-tight">
            It all starts with a 
            <span className="text-blue-600 dark:text-blue-400"> Business Account</span>
          </h2>



          <div className="pt-2">
            <button className="group inline-flex items-center justify-center px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Get Started as a Business
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Image Section - 60% */}
        <div className="w-full aspect-video relative bg-transparent rounded-2xl overflow-hidden">
          <img 
            src="/Business/Business_Listing.png"
            alt="Business professionals collaborating"
            className="w-full h-full object-cover bg-transparent"
          />
        </div>
        
      </div>

    </section>
  );
};

export default Bus_Offering;