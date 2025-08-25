import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Share2,
  ArrowRight,
} from "lucide-react";
import TalkIcon from "/BusinessView/Talk.svg" // adjust path as needed
import TalkText from "/BusinessView/TalkText.svg"

const BusinessFooter: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-black text-white dark:text-white pt-24 pb-10 px-6 
                        transition-colors duration-300
                        dark:[&]:bg-black [&]:bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col items-start gap-6">
          {/* Logo */}
          <img
            src="/Archinza-Logo-dark.png"
            alt="Archinza"
            className="h-8 dark:block hidden"
          />
          <img
            src="/Archinza-Logo-light.png"
            alt="Archinza"
            className="h-8 dark:hidden block"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 border border-orange-500 rounded-full hover:bg-orange-500 transition">
              <Share2 className="w-4 h-4 text-orange-500 dark:text-orange-500" />
            </button>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-slate-900 dark:text-white" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-slate-900 dark:text-white" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-slate-900 dark:text-white" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 max-w-lg order-3 lg:order-2">
          <p className="text-orange-500 text-sm mb-3">
            To get regular updates, subscribe to our newsletter!
          </p>
          <div className="flex items-center border border-orange-500 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none text-slate-900 dark:text-white placeholder:text-gray-400"
            />
            <button className="bg-transparent px-4 py-2 hover:bg-orange-500 transition">
              <ArrowRight className="w-5 h-5 text-orange-500 dark:text-orange-500" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 text-sm order-2 lg:order-3">
          <div>
            <p className="text-orange-500 font-medium">FOR MARKETING QUERIES:</p>
            <p className="mt-1 text-slate-900 dark:text-white">reach@archinza.com</p>
          </div>
          <div>
            <p className="text-orange-500 font-medium">FOR GENERAL QUERIES:</p>
            <p className="mt-1 text-slate-900 dark:text-white">hello@archinza.com</p>
          </div>
          <div>
            <p className="text-orange-500 font-medium">BLOGS</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400 gap-2">
        <p>
          Copyright © 2025 Archinza Connect Pvt Ltd. |{" "}
          <a href="#" className="hover:underline">Terms & Conditions</a> |{" "}
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">FAQs</a>
        </p>




      </div>
    </footer>
  );
};

export default BusinessFooter;
