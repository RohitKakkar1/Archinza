import React from "react";
import { FaHistory, FaRedo, FaQuestionCircle, FaLifeRing, FaCommentDots, FaStar, FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <Link  to="/archinza-search">
        <button className="text-2xl">✕</button>
        </Link>
        <h1 className="text-lg font-semibold">Profile</h1>
        <div className="w-6" /> {/* Spacer for balance */}
      </div>

      {/* Deepsearch Pro Card */}
      <div className="m-4 p-4 bg-[#0b0d1b] text-white rounded-2xl shadow-md">
        <h2 className="text-xl font-bold">
          Archinza <span className="ml-2 px-2 py-0.5 text-xs bg-blue-600 rounded-full">PRO</span>
        </h2>

        <ul className="mt-3 space-y-2 text-sm">
          <li>✔ <span className="font-bold">1000</span> SEARCH CREDITS</li>
          <li>✔ SEARCH VIA <span className="font-bold">IMAGE</span></li>
          <li>✔ UPLOAD & ASK <span className="font-bold">PDF</span></li>
          <li>✔ UNLOCK <span className="font-bold">DATING</span> PROFILES</li>
        </ul>

        <button className="mt-4 bg-white text-black font-medium px-4 py-2 rounded-full shadow hover:bg-gray-100">
          TRY NOW
        </button>
      </div>

      {/* Menu List */}
      <div className="flex flex-col divide-y bg-gray-100 mx-4 rounded-2xl shadow-sm overflow-hidden">
        <MenuItem icon={<FaHistory />} text="History" />
        <MenuItem icon={<FaRedo />} text="Restore Purchase" />
        <MenuItem icon={<FaQuestionCircle />} text="FAQ" />
        <MenuItem icon={<FaLifeRing />} text="Help" />
        <MenuItem icon={<FaCommentDots />} text="Feedback" />
        <MenuItem icon={<FaStar />} text="Rate Us" />
        <MenuItem icon={<FaFolder />} text="Terms of Use" />
        <MenuItem icon={<FaFolder />} text="Privacy Policy" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
    <div className="flex items-center gap-3 text-gray-800">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
    <span className="text-gray-400">›</span>
  </div>
);

export default ProfilePage;
