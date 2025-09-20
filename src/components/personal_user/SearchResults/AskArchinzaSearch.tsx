import { useState, useEffect } from "react";
import { ChevronRight, X, Mic } from "lucide-react";

const AskArchinzaSearch = () => {
  const [open, setOpen] = useState(false);

  const questions = [
    "What are the tallest mountains in the world?",
    "Which mountains are the best for hiking or trekking?",
    "What kinds of plants and animals live in mountain regions?",
    "How do mountains affect the local climate?",
    "What is the geological process behind mountain formation?",
    "Are there any famous mountain peaks I should know about?",
    "What safety tips should I keep in mind while climbing mountains?",
    "How can we help conserve mountain ecosystems?",
  ];

  useEffect(() => {
    document.body.style.overflow = open && window.innerWidth < 1024 ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const content = (
    <div className="flex flex-col gap-2 h-screen overflow-y-auto px-4 py-2">
      {/* Header */}
      <div className="w-full py-1 flex items-center justify-center cursor-pointer" onClick={() => setOpen(true)}>
        <div className="flex flex-row items-center justify-center gap-2">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">More about Mountains</h2>
          <ChevronRight className="text-gray-800 dark:text-gray-200" />
        </div>
      </div>

      {/* Questions */}
      <div className={`${open ? "flex flex-wrap gap-2 max-w-full" : "flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar"}`}>
        {questions.map((q, i) => (
          <button key={i} onClick={() => setOpen(true)}
            className={`px-3 py-2 rounded-full text-sm transition ${open ? "bg-orange-500 text-white hover:bg-orange-600 whitespace-normal break-words text-left" : "bg-orange-500 dark:bg-gray-700 text-white dark:text-gray-200 shrink-0"}`}>
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="mt-auto w-fit flex items-center gap-2 relative right-4 px-4 py-2.5 rounded-full bg-white/70 dark:bg-gray-800/70 border border-gray-300/40 dark:border-gray-700/40 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-white/80 dark:hover:bg-gray-800/80">
        <input type="text" placeholder="Ask Archinza a question" className="flex-1 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400" />
        <Mic className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200" />
      </div>
    </div>
  );

  return (
    <>
      {open && <div className="fixed h-screen inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)} />}
      <div className={`fixed left-0 right-0 z-50 transition-transform duration-500 lg:hidden ${open ? "top-[20vh]  bottom-0 translate-y-0" : "translate-y-[calc(100%-5.8rem)] bottom-0"}`}>
        {open && <button onClick={() => setOpen(false)} className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 z-50"><X className="w-5 h-5 text-gray-600 dark:text-gray-200" /></button>}
        <div className="bg-white dark:bg-gray-900 rounded-t-3xl border-t-2 shadow-sm h-full">{content}</div>
      </div>

      <div className="hidden  h-screen  lg:flex lg:flex-col lg:relative lg:bottom-0 lg:w-[380px] lg:z-40 lg:border-l lg:bg-white lg:dark:bg-gray-900 lg:shadow-md">
        <div className="h-screen overflow-y-auto">{content}</div>
      </div>
    </>
  );
};

export default AskArchinzaSearch;
