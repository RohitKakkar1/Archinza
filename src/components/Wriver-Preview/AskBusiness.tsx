import { useState, useEffect } from "react";
import { X } from "lucide-react";

const AskBusiness = () => {
  const [open, setOpen] = useState(false);

  const questions = [
    "Where are Wriver stores located?",
    "What’s the best way to style my space with Wriver furniture?",
    "Does Wriver customize furniture for my home or office?",
    "How can I get design consultation from Wriver?",
    "What materials and finishes are available in the Wriver catalog?",
    "How long is the lead time for custom furniture orders?",
  ];

  // 🔒 Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Bottom sheet */}
    {/* Bottom sheet wrapper */}
<div
  className={`fixed left-0 right-0 z-50 transition-transform duration-500 ${
    open
      ? "top-[20vh] bottom-0 translate-y-0" // opens to 80vh
      : "translate-y-[calc(100%-5rem)] bottom-0" // closed state
  }`}
>
    
  {/* Floating Close Button (outside sheet, above it) */}
  {open && (
<button
  onClick={() => setOpen(false)}
  className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 z-50 transition-opacity duration-500 ${
    open ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <X className="w-5 h-5 text-gray-600 dark:text-gray-200" />
</button>

  )}

  {/* Bottom sheet content */}
  <div className=" flex flex-col gap-2 bg-white dark:bg-gray-900 rounded-t-3xl px-4 py-2 shadow-sm relative border-t-2  h-full overflow-y-auto">
    {/* Header (always clickable to open) */}
    {/* <h2
      className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3 cursor-pointer"
      onClick={() => setOpen(true)}
    >
      Ask Wriver Anything
    </h2> */}
<div className="h-4 w-full flex items-center justify-center"       onClick={() => setOpen(true)}
>
  <div className="h-1 w-8 rounded-xl bg-gray-500"></div>
</div>


          {/* Questions */}
          <div
            className={`${
              open
                ? "flex flex-wrap gap-2 max-w-full" // open → wraps
                : "flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar" // closed → scrolls in one line
            }`}
          >
            {questions.map((q, i) => (
              <button
                key={i}
                onClick={() => setOpen(true)} // question also triggers open
                className={`px-3 py-2 rounded-full text-sm transition ${
                  open
                    ? "bg-orange-500 text-white hover:bg-orange-600 whitespace-normal break-words text-left"
                    : "bg-orange-500 dark:bg-gray-700 text-white dark:text-gray-200 shrink-0"
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

<style>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`}</style>

    </>
  );
};

export default AskBusiness;
