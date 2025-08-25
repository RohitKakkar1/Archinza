import { useState } from "react";
import { User, Megaphone } from "lucide-react";

const BusinessStatus = () => {
  const [online, setOnline] = useState(true);

  return (
    <div className="flex flex-col gap-3 items-start">
      {/* Top Banner */}
      <div className="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium cursor-pointer hover:bg-blue-100 transition">
        <User className="w-8 h-8" />
        <span>Enhance your profile now! for better client matchmaking</span>
      </div>

      {/* Status + Button row */}
      <div className="flex items-center gap-4 w-full">
        {/* Status Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Status</span>
          <span className="text-sm font-semibold">
            {online ? "Online" : "Offline"}
          </span>
          <button
            onClick={() => setOnline(!online)}
            className={`relative w-10 h-5 rounded-full transition-colors ${
              online ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                online ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

        <div className="w-full">
          {/* Promote Button */}
          <button className="flex w-full items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white px-2 py-2 rounded-full text-xs font-medium shadow-md hover:opacity-90 transition">
            <Megaphone className="w-4 h-4" />
            Promote Business Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessStatus;
