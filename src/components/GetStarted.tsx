import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useState } from "react";
import FeaturesBus from './features';
import FeaturesUser from './FeaturesUser.tsx';

const GetStarted: React.FC = () => {

    const [userType, setUserType] = useState("business");

  return (
    <section className="flex-1 h-fit  px-4 sm:px-6 lg:px-8 py-8 lg:py-16 dark:bg-black">
              <div className="h-fit bg-white py-8 dark:bg-black">
      {/* Heading + Dropdown */}
      <div className="text-center ">
              <div className="inline-flex items-center font-sans justify-center text-4xl font-medium text-gray-900 gap-2">
                <span>Get started as a</span>
               <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1">
                      <button
                        onClick={() => setUserType("business")}
                        className={`px-5 py-2 rounded-full text-lg font-semibold transition ${
                          userType === "business"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-white"
                        }`}
                      >
                        Business
                      </button>
                      <button
                        onClick={() => setUserType("individual")}
                        className={`px-5 py-2 rounded-full text-lg font-semibold transition ${
                          userType === "individual"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-white"
                        }`}
                      >
                        Individual
                      </button>
                    </div>


              </div>
            </div>

      {/* Conditional Component */}
      {userType === "business" ? <FeaturesBus /> : <FeaturesUser />}
    </div>
    </section>
  );
};

export default GetStarted;