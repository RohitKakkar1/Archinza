import React from "react";
import { ArrowRight, Upload, Search, Eye } from "lucide-react";
import illustration from '/Business/pricing.png';

const BusinessPricing = () => {
  return (
    
    <section className="flex justify-center font-sans items-center bg-blue-100 py-10 px-4  ">
      <div className="bg-white rounded-3xl shadow-md flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full p-6 lg:p-12">
        
        {/* Image on top (mobile), left (desktop) */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={illustration}
            alt="Detailed Plans Illustration"
            className="max-w-md w-full"
          />
        </div>

  {/* Spacer (20% desktop only) */}
        <div className="hidden lg:block lg:w-[10%]" />

        {/* Text Section */}
  <div className="w-full lg:w-[45%] text-left lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Be a <span className="text-blue-600">‘Founding User’</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Join Archinza during Beta to unlock exclusive features like more uploads, 
            smart discovery and 1 year of FREE access at full launch.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-start gap-3">
              <Upload className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">5x Upload Capacity:</span> More storage. More auto-fetched data. More credibility minus the manual effort.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Search className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Smarter Discovery. Wider Reach:</span> Get matched through intelligent text + image search. Be seen by the right clients, faster.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Control Your Visibility:</span> Want to stay public but hide from competitors? Share only with audiences you choose.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start gap-4 pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Get Early Access <ArrowRight size={18} />
            </a>
            <button className="group inline-flex items-center justify-center w-fit px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full">
                            See Plan details
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          </div>
          
        </div>

              

        
      </div>
    </section>
    
  );
};

export default BusinessPricing;
