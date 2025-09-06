export default function SearchBar() {
  return (
    <div className="flex items-center flex-col w-full max-w-md gap-3 px-6 py-4">
      {/* Middle search box */}
      <div className="flex flex-row w-full items-center justify-between border rounded-full bg-white shadow-sm px-3 py-2">
        <div className="flex items-center gap-2">
          <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
            <img
              src="/Personal_user/humbleicons_ai.svg"
              alt="AI"
              className="w-6 h-6"
            />
          </button>
          <span className="text-sm font-medium text-gray-800">
            Search for People or Products
          </span>
        </div>

        {/* Right icon button */}
        <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <img
            src="/Personal_user/mynaui_send-solid.svg"
            alt="Right"
            className="w-5 h-5"
          />
        </button>
      </div>

{/* Left icon with label */}
<div className="flex flex-row items-center gap-2 w-auto h-fit">
  <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
    <img
      src="/Personal_user/bxs_image.svg"
      alt="Left"
      className="w-5 h-5"
    />
  </button>
  <p className="text-sm font-medium text-gray-700">Image Based Search</p>
</div>

    </div>
  );
}
