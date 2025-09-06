export default function SearchBar() {
  return (
    <div className=" flex items-center w-full max-w-md gap-3 py-4 ">
      {/* Left icon button */}
      <div className="flex w-10 h-10 items-center justify-center">
        <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
            <img src="\Personal_user\bxs_image.svg" alt="Left" className="w-5 h-5" />
        </button>
      </div>

    <div className="flex flex-row w-full items-center justify-between items-center border rounded-full shadow-sm px-2 py-1 ">
      {/* Search text */}
      <div className="flex text-center items-center">
        <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
        <img src="public\Personal_user\humbleicons_ai.svg" alt="Right" className="w-6 h-6" />
        </button>
        <span className="text-normal font-medium text-gray-800">
          Search for People or Products
        </span>
      </div>

    <div>
      {/* Right icon button */}
      <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
        <img src="\Personal_user\mynaui_send-solid.svg" alt="Right" className="w-5 h-5" />
      </button>
      </div>

      </div>
    </div>
  );
}
