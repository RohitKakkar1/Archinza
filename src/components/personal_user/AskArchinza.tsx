import { useState, useEffect } from "react";
import { ChevronRight, X, Mic } from "lucide-react";

const AskArchinza = () => {
  const [open, setOpen] = useState(false);

  const sections = [
    {
      title: "Architecture & Design Topics",
      items: [
        "Ask about Products and Materials",
        "Ask about Design queries",
        "Ask about Technical queries",
        "Ask about Professional and Agencies Contact",
        "Ask about Mentorship",
      ],
    },
    {
      title: "About Archinza",
      items: [
        "What is Archinza?",
        "How does Archinza help architects and designers?",
        "How to join the Archinza network?",
        "How to collaborate or partner with Archinza?",
        "How to get featured on Archinza?",
      ],
    },
    {
      title: "Explore & Learn",
      items: [
        "Latest trends in sustainable architecture",
        "Popular building materials in modern construction",
        "Emerging architectural software tools",
        "Tips for building a strong architecture portfolio",
        "How to grow as a young architect",
      ],
    },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 right-0 z-50 transition-transform duration-500 ${
          open
            ? "top-[20vh] bottom-0 translate-y-0"
            : "translate-y-[calc(100%-6.7rem)] bottom-0"
        }`}
      >
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 z-50"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-200" />
          </button>
        )}

        <div className="flex flex-col bg-white dark:bg-gray-900 rounded-t-3xl px-4 pt-2 pb-4 shadow-sm relative border-t-2 h-full overflow-y-auto">
          {/* Header */}
          <div className="w-full px-2 py-1 flex items-center justify-between cursor-pointer">
            <div
              className="flex flex-row items-center gap-2"
              onClick={() => setOpen(true)}
            >
              <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                Ask Archinza Anything
              </h2>
              <ChevronRight className="text-gray-800 dark:text-gray-200" />
            </div>

            <button className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline">
              Recent Chats
            </button>
          </div>

          {open ? (
            // 🔓 Open state: full sections
            <div className="flex flex-col gap-4 mt-2">
              {sections.map((sec, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    {sec.title}
                  </h3>
                  <div className="flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
                    {sec.items.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setOpen(true)}
                        className="px-3 py-2 rounded-full text-sm bg-orange-500 text-white hover:bg-orange-600 shrink-0"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // 🔒 Closed state: only section titles
            <div className="flex gap-3 mt-3 overflow-x-auto whitespace-nowrap no-scrollbar">
              {sections.map((sec, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(true)}
                  className="px-3 py-2 rounded-full text-sm bg-gray-200 text-gray-700 shrink-0 cursor-pointer"
                >
                  {sec.title}
                </div>
              ))}
            </div>
          )}

          {/* Typing Bar (only visible when open) */}
          {open && (
<div className="mt-auto flex items-center gap-2 
  fixed bottom-4 left-4 right-4
  px-4 py-2.5 rounded-full
  bg-white/70 dark:bg-gray-800/70
  border border-gray-300/40 dark:border-gray-700/40
  shadow-md backdrop-blur-sm
  transition-all duration-300
  hover:shadow-lg hover:bg-white/80 dark:hover:bg-gray-800/80"
>
  <input
    type="text"
    placeholder="Ask Archinza a question"
    className="flex-1 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
  />
  <Mic className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200" />
</div>

          )}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default AskArchinza;
