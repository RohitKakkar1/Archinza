import React, { useEffect, useState } from "react";
import CarSpecsCard from "./CarSpecsCard";
import { MapPin, Globe, Calendar, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, StarIcon, FireIcon } from '@heroicons/react/24/solid';
import ThirdCard from "./ThirdCard";
import { ChevronLeft } from "lucide-react";

const items = [
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Can do Projects: <strong>Globally</strong>
      </>
    ),
  },
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Experience in: <strong>Architecture</strong>
      </>
    ),
  },
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Expert in: <strong>UX Design</strong>
      </>
    ),
  },
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Available for: <strong>Collaboration</strong>
      </>
    ),
  },
];

const AboutMobile: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full p-4 gap-4 text-gray-900 dark:text-gray-100">
      {/* Card 1 */}
      <div className="dark:border-gray-700">
        <div className="h-auto  rounded-lg   flex flex-col transition-colors duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">About</h2>
                  <button
        onClick={() => setOpen(true)}
        className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
      >
        View More
      </button>
      </div>

      {/* Bottom Sheet */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="w-full max-w-md rounded-t-2xl bg-white dark:bg-gray-900 shadow-lg transition-transform animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back</span>
              </button>
              <h2 className="text-base font-semibold">About</h2>
              <div className="w-8" /> {/* Spacer for centering */}
            </div>

            {/* Content */}
            <div className="p-4 max-h-[70vh] overflow-y-auto text-sm text-gray-700 dark:text-gray-300">
              <div className="">
                      <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
                    <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
                    <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
                    <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
                    <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
                    <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
                    <p>
                      Add your about content here. You can put paragraphs, images, or
                      even other components.
                    </p>
              </div>
            </div>
          </div>
        </div>
      )}

          <div className="flex flex-col gap-4">
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              LTDF is a boutique architecture and interior design firm based in
              the heritage quarters of New Delhi, India. Established in 1997
            </p>

            {/* Rotating Info */}
            <div className="relative h-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 text-sm absolute text-gray-800 dark:text-gray-200"
                >
                  {items[index].icon}
                  <span>{items[index].text}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-sm flex items-center gap-2">
                Architecture
              </span>
              <span className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-sm flex items-center gap-2">
                Interior Design
              </span>
              <span className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-sm flex items-center gap-2">
                Landscape Design
              </span>
              <span className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-sm flex items-center gap-2">
                Luxury Retail
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div>
        <CarSpecsCard />
      </div>

 

      {/* Focus Section */}
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-m font-medium">Our Focus</h2>

        <div className="flex gap-4 text-xs overflow-x-auto scrollbar-none">
          <p className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            Affordable
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <StarIcon className="w-4 h-4 text-yellow-500" />
            Eco-Friendly
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <FireIcon className="w-4 h-4 text-red-500" />
            Good Value
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <CheckCircleIcon className="w-4 h-4 text-blue-500" />
            Mid Range
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <StarIcon className="w-4 h-4 text-purple-500" />
            Premium
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <FireIcon className="w-4 h-4 text-orange-500" />
            High-end
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <CheckCircleIcon className="w-4 h-4 text-pink-500" />
            Luxury
          </p>

          <p className="flex-shrink-0 flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <StarIcon className="w-4 h-4 text-gray-500" />
            Mass-Market
          </p>
        </div>

        <div className="pt-4">
             <ThirdCard />
             </div>
      </div>
    </div>
  );
};

export default AboutMobile;
