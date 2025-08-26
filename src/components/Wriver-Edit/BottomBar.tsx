import { useNavigate } from "react-router-dom";
import { Eye, ArrowUpCircle } from "lucide-react";

export default function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex gap-2 px-3 py-2 z-50">
      {/* Left Button */}
      <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white border border-blue-600 px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-blue-700 transition">
        <ArrowUpCircle className="w-4 h-4" />
        Upgrade Plan
      </button>

      {/* Right Button */}
      <button
        onClick={() => navigate("/wriver")}
        className="flex-1 flex items-center gap-2 border border-gray-300 justify-center bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-medium hover:bg-gray-100 transition"
      >
        <Eye className="w-4 h-4" />
        Preview
      </button>
    </div>
  );
}
