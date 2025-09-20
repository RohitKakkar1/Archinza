import React from "react";
import { ArrowLeft } from "lucide-react";4
import AskArchinzaStair from "../AskArchinzaStair";

export default function SearchResult() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-sm  font-sans">
      {/* Top image with back button */}
      <div className="relative">
        <img
          src="/BusinessView/LTDFPhotos/1.jpg" // replace with your image
          alt="Business Preview"
          className="w-full  object-cover"
        />
        <button className="absolute top-4 left-4 bg-gray-200/70 hover:bg-gray-300 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Likes row */}
      <div className="flex items-center gap-6 px-6 py-4">
        <div className="flex items-center gap-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 11.25 9 11.25s9-4.03 9-11.25z"
            />
          </svg>
          <span>20</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 11.25 9 11.25s9-4.03 9-11.25z"
            />
          </svg>
          <span>20</span>
        </div>
      </div>

      {/* Business details */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm">
            ltdf
          </div>
          <h2 className="text-lg font-semibold">LTDF Studios</h2>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Established in 1997 by Prashaant Kochhar and Uphar Chibber, who were
          then joined by Natasha Kochhar in 2009
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 text-l font-medium">
          <button className="flex items-center justify-left text-left text-black hover:underline">
            View Business Page
          </button>
          <button className="flex items-center justify-left text-left text-black hover:underline">
            Ask LTDF Studios
          </button>
        </div>
        <AskArchinzaStair />
      </div>
    </div>
  );
}
