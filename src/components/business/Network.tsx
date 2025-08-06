import React from 'react';
import { MessageCircle, Car, Utensils, Calendar } from 'lucide-react';

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
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              
              {/* Main Globe */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl dark:shadow-blue-500/20">
                {/* Globe grid pattern */}
                <div className="absolute inset-4 rounded-full opacity-30" style={{
                  backgroundImage: `
                    linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.3) 76%, transparent 77%, transparent)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Globe highlight */}
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white opacity-20 blur-xl"></div>
                
                {/* Connection dots */}
                <div className="absolute top-16 right-12 w-3 h-3 rounded-full bg-white animate-pulse"></div>
                <div className="absolute bottom-20 left-16 w-2 h-2 rounded-full bg-yellow-300 animate-pulse"></div>
                <div className="absolute top-32 left-8 w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <div className="absolute bottom-24 right-20 w-3 h-3 rounded-full bg-green-300 animate-pulse"></div>
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-400 dark:border-white opacity-30 dark:opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-8 rounded-full border border-gray-400 dark:border-white opacity-25 dark:opacity-15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-12 rounded-full border border-gray-400 dark:border-white opacity-20 dark:opacity-10 animate-spin" style={{ animationDuration: '25s' }}></div>

              {/* Floating Message Bubbles */}
              <div className="absolute -top-8 -left-12 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white text-black p-4 rounded-2xl shadow-xl max-w-xs relative">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Your driver is almost there.</p>
                      <p className="text-xs text-gray-600 mt-1">Jesse will arrive in 3 minutes.</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </div>

              <div className="absolute -top-4 -right-16 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white text-black p-4 rounded-2xl shadow-xl max-w-xs relative">
                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Bon appétit! Your order from Fuego Tacos was delivered 🌮</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-12 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 right-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white text-black p-4 rounded-2xl shadow-xl max-w-xs relative">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Reminder: your doctor appointment is tomorrow at 10:30am.</p>
                      <p className="text-xs text-gray-600 mt-1">Text "Y" to confirm.</p>
                    </div>
                  </div>
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile: Bottom, Desktop: Right */}
          <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
            <div className="space-y-8">
              
              {/* Header */}
              <div className="space-y-6">
                <p className="text-sm font-sans  font-semibold tracking-[0.2em] text-gray-400 uppercase">
                  Archinza Network
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
                    600<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                    Design & Build Businesses
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    160<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                     Brands & Manufactureres
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    100<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                    Sellers & Distributers
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                    700<span className="text-blue-400">+</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-400">
                    Design Support Services
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