export default function SearchBar() {
  return (
    <div className="flex flex-row items-center w-full max-w-lg gap-3 py-4">

          {/* Left icon (bottom aligned) */}
      <div className="flex flex-col  justify-center items-center gap-2 h-full">
        <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
          <img
            src="/Personal_user/bxs_image.svg"
            alt="Upload"
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Search container */}
      <div className="flex flex-row w-full items-center justify-between border border-white/20 rounded-full shadow-lg px-3 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
        {/* Search icon + text */}
        <div className="flex items-center gap-2 text-white">
          <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <img
              src="/Personal_user/humbleicons_ai.svg"
              alt="AI"
              className="w-6 h-6"
            />
          </button>
          <span className="text-sm md:text-base font-medium text-gray-800">
            Search for People or Products
          </span>
        </div>

        {/* Send button (blue gradient) */}
        <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
          <img
            src="/Personal_user/mynaui_send-solid.svg"
            alt="Send"
            className="w-5 h-5 invert"
          />
        </button>

      </div>


    </div>
  );
}
