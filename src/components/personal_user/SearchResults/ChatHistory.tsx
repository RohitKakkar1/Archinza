import { useState, useEffect } from "react";
import { Plus, MessageSquare, Trash2, X } from "lucide-react";

const ChatHistory = () => {
  const [open, setOpen] = useState(false);
  const [chats, setChats] = useState([
    { id: 1, title: "Sustainable materials for housing" },
    { id: 2, title: "Portfolio tips for students" },
    { id: 3, title: "Best 3D design tools" },
    { id: 4, title: "How to partner with Archinza" },
  ]);

  const handleDelete = (id: number) => setChats(chats.filter(c => c.id !== id));

  // Prevent body scroll on mobile overlay
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`relative h-screen z-50 transition-transform duration-500
        bg-white dark:bg-gray-900 shadow-md border-r border-gray-200 dark:border-gray-700
        w-64 flex flex-col ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">Chat History</h2>
          <button onClick={() => setOpen(false)} className="lg:hidden p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-200" />
          </button>
        </div>

        {/* New Chat */}
        <button className="m-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium shadow-md">
          <Plus className="w-4 h-4" />
          New Chat
        </button>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-2 py-2 space-y-1">
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer group">
              <div className="flex items-center gap-2 truncate">
                <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-200 truncate">{chat.title}</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleDelete(chat.id); }}
                className="opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">
          Archinza AI • Chat Assistant
        </div>
      </div>
    </>
  );
};

export default ChatHistory;
