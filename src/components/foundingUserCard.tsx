import React from "react";
import { ArrowRight } from "lucide-react";
import illustration from "/images/Founding_User.png"; // replace with your mobile image path

const FoundingUserCard = () => {
  return (
    <section className="flex justify-center items-center bg-blue-600 py-10 px-4">
      <div className="bg-white rounded-3xl shadow-md flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 max-w-5xl w-full p-6 lg:p-12">
        
        {/* Mobile Image (hidden on desktop) */}
        <div className="lg:hidden w-full flex justify-center mb-6">
          <img 
            src={illustration} 
            alt="Illustration" 
            className="max-w-xs w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-3">Be a Founding User.</h2>
          <p className="text-gray-700 mb-6">
            Smarter discovery for anyone searching, showcasing, or building in Design &amp; Build.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Get Early Access <ArrowRight size={18} />
          </a>
        </div>

        {/* Desktop image */}
        <div className="hidden lg:block flex-shrink-0">
          <img 
            src={illustration} 
            alt="Illustration" 
            className="w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundingUserCard;
