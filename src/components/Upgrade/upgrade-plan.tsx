import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Benefit_tiles from "./Supporter_Benefit_tiles";
import { div } from "framer-motion/client";
import illustration1 from '/Business/1.png';
import illustration2 from '/Business/2.png';
import { Check, X } from "lucide-react";
import { Info } from "lucide-react";



export default function SubscriptionPage() {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState("supporter"); // default Starter

  return (
    <div className="max-w-md mx-auto bg-white text-gray-900 dark:bg-black dark:text-white min-h-screen pb-20 transition-colors">
      {/* Header */}
      <div className="px-5 pt-6 flex items-center gap-2">
        <button
          onClick={() => navigate("/wriver-edit")}
          className="p-1 bg-gray-100 rounded-3xl"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <h2 className="text-xl font-sans font-bold">
          Upgrade your Plan
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex mx-5 mt-6 bg-gray-200 dark:bg-gray-800 rounded-full p-1">
                <button
          onClick={() => setActivePlan("supporter")}
          className={`flex-1 py-2 rounded-full font-medium ${
            activePlan === "supporter"
              ? "bg-white dark:bg-gray-900 text-black dark:text-white"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Supporter
        </button>
        <button
          onClick={() => setActivePlan("starter")}
          className={`flex-1 py-2 rounded-full font-medium ${
            activePlan === "starter"
              ? "bg-white dark:bg-gray-900 text-black dark:text-white"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Starter
        </button>
      </div>

      {/* Plan Content */}
      <div className="mt-6 px-5">
        {activePlan === "starter" && (
        <div>
                    <h2 className="flex flex-col w-full items-center text-lg font-medium mb-3 text-gray-900 dark:text-gray-100">
            Your work deserves to be <span className="text-orange-600 dark:text-blue-400">discovered.</span>
          </h2>
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={illustration1}
            alt="Detailed Plans Illustration"
            className="max-w-md w-[360px]"
          />
        </div>
        
          <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            21 <span className="text-blue-600 dark:text-blue-400">Days remaining</span>
            <span title="Your current plan expires in 21 days. Upgrade to keep your profile active.">
            </span>
            </h2>
                        </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                Your Starter plan is expiring soon. Upgrade to keep your profile live and gain more visibility.
                </p>


                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-s transition-all">
                    <h3 className="font-bold text-lg mb-1">Plan Benefits</h3>
<ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    Upload <b>5 PDFs</b> Per Year
  </li>
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    <b>200 Photos</b> Gallery Limit
  </li>
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    Autofetch Images from synced Links and PDFs
  </li>
  <li className="flex items-center gap-2">
    <X className="w-5 h-5 text-red-600 dark:text-red-400" />
    <b>Hide</b> content from competitors
  </li>
  <li className="flex items-center gap-2">
    <X className="w-5 h-5 text-red-600 dark:text-red-400" />
    Access to WhatsApp Communities
  </li>
</ul>

                </div>
          </div>
        )}

        {activePlan === "supporter" && (
        <div className="">
        <h2 className="flex flex-col w-full items-center text-lg font-medium mb-3 text-gray-900 dark:text-gray-100">
            Your work deserves to be <span className="text-orange-600 dark:text-blue-400">discovered.</span>
          </h2>
                    {/* Image on top (mobile), left (desktop) */}
        
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={illustration2}
            alt="Detailed Plans Illustration"
            className="max-w-md w-[360px]"
          />
        </div>
                    {/* Text Section */}
        <div className="w-full lg:w-[45%] text-left lg:text-left">
          
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Become a <span className="text-blue-600 dark:text-blue-400">‘Founding User’</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Unlock exclusive Beta access to Archinza and enjoy all benefits when the full product launches.
          </p>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-s transition-all">
                    <h3 className="font-bold text-lg mb-1">Plan Benefits</h3>
<ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    Upload <b>25 PDFs</b> Per Year
  </li>
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    <b>1000 Photos</b> Gallery Limit
  </li>
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    Autofetch Images from synced Links and PDFs
  </li>
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    <b>Hide</b> content from competitors
  </li>
  <li className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
    Access to WhatsApp Communities
  </li>
</ul>

                </div>
          </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto px-5 pb-5 bg-gradient-to-t from-white dark:from-black">
        {activePlan === "starter" ? (
          <button 
            onClick={() => navigate("/wriver-edit")}

          className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full font-medium hover:opacity-80 transition">
            Continue for Free
          </button>
        ) : (
          <button 
        onClick={() => navigate("/upgrade-thank-you")}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Buy Now at <span className="line-through text-sm">₹15,000</span> ₹999
          </button>
        )}
      </div>
    </div>
  );
}
