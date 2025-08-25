import { useNavigate } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-between items-center px-3 py-2 z-50">
      {/* Left Button */}
      <button className="flex items-center gap-2 bg-blue-600 text-white border border-blue-600 px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-blue-50 transition">
        Upgrade Plan
      </button>

      {/* Right Button */}
      <button
        onClick={() => navigate("/wriver")}
    className="flex-1 flex border border-gray-300 justify-center items-center gap-2 bg-White text-black px-2 py-2 rounded-full shadow-md text-sm font-medium hover:bg-gray-100 transition ml-3"
      >
        Preview Business Page
      </button>
    </div>
  );
}
