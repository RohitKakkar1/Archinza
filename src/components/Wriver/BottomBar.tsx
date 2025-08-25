import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BottomBar() {
  const navigate = useNavigate();
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full flex items-center px-3 py-2 z-50 transition-all ${
        minimized ? "h-12 bg-none border-t-0" : "h-auto bg-white border-t border-gray-400"
      }`}
    >
      {/* Left Button */}
      {!minimized && (
        <button className="flex items-center gap-2 bg-blue-600 text-white border border-blue-600 px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-blue-50 transition">
          Upgrade Plan
        </button>
      )}

      {/* Right Button */}
      {!minimized && (
        <button
          onClick={() => navigate("/wriver-edit")}
          className="flex-1 flex border border-gray-300 justify-center items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-medium hover:bg-gray-100 transition ml-3"
        >
          Edit Business Page
        </button>
      )}

      {/* Toggle Button (absolute position, always visible) */}
      <button
        onClick={() => setMinimized(!minimized)}
        className="absolute right-3 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
      >
        {minimized ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
    </div>
  );
}
