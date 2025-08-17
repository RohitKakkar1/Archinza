import React from 'react';
import { MessageCircle, Car, Utensils, Calendar } from 'lucide-react';
import GlobeSVG from '/Business/main-2.svg'; // adjust path


const NetworkSection = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgb(59 130 246) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgb(59 130 246) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
{/* Globe Section - Mobile: Top, Desktop: Left */}
<div className="flex-1 relative order-1 lg:order-1">
  <div className="relative mx-auto w-80 h-80 lg:w-[32rem] lg:h-[32rem]">
    {/* Main Globe */}
    <img
      src={GlobeSVG}
      alt="Globe"
      className="w-full h-full  object-contain"
    />
  </div>
</div>


          {/* Content Section - Mobile: Bottom, Desktop: Right */}
          <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
            <div className="space-y-8">
              
              {/* Header */}
              <div className="space-y-6">
                <p className="text-sm font-sans  font-semibold tracking-[0.2em] text-gray-400 uppercase">
                  Archinza Community
                </p>
                
                <h1 className="text-2xl font-sans lg:text-3xl xl:text-4xl font-bold leading-tight">
                    Meet the platform that powers the built environment.
                </h1>
                
                <p className="text-lg font-sans  lg:text-l text-gray-700 leading-relaxed max-w-2xl">
                  Discover projects, people, and possibilities—all in one place. Archinza connects architects, material experts, and design professionals through one intelligent ecosystem.

                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 lg:gap-12 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    300<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                    Business/ Firm Owners
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    100<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                     Working Professionals
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    600<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                    Students
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    100<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                    Freelancers/ Artists
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;