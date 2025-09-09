// Jobs.tsx
export default function Jobs() {
  return (
    <div className=" bg-white  text-white">
      <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg p-5">
        {/* Logo and title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png" // replace with actual logo path
              alt="Arace Designs"
              className="w-12 h-12 rounded-full border border-gray-600"
            />
            <div>
              <h2 className="text-lg font-bold">Interior Designer</h2>
              <p className="text-gray-400 text-sm">Arace Designs</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full">
            ➝
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-300">
            <span>📍</span>
            <span>Sector 16, Noida</span>
          </div>

          {/* Work Mode */}
          <div className="flex items-center gap-2 text-gray-300">
            <span>🕒</span>
            <span>Full Time</span>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-2 text-gray-300">
            <span>💼</span>
            <span>2-4 Years Of Experience</span>
          </div>

          {/* Salary */}
          <div className="flex items-center gap-2 text-gray-300">
            <span>💰</span>
            <span>15,000 - 38,000 Monthly*</span>
          </div>
        </div>
      </div>
    </div>
  );
}
