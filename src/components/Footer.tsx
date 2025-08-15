import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Share2,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
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
        {/* WhatsApp Floating Icon */}
        <a
          href="#"
          className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M20.52 3.48A11.79 11.79 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.6 5.95L0 24l6.2-1.58A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.23-6.17-3.48-8.52zm-8.52 18.02c-1.93 0-3.81-.52-5.45-1.52l-.39-.23-3.68.94.98-3.6-.25-.37A9.77 9.77 0 012.22 12c0-5.39 4.39-9.78 9.78-9.78 2.62 0 5.09 1.02 6.94 2.87a9.76 9.76 0 012.85 6.91c0 5.39-4.39 9.78-9.78 9.78z" />
            <path d="M17.56 14.62c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.43.25-.71.25-1.32.18-1.43-.07-.11-.27-.18-.57-.33z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
