import React, { useState, useEffect } from "react";
import { MessageSquare, Bookmark, Settings, Clock, LogOut, Plus } from "lucide-react";
import ChatHistory from "./ChatHistory";
import AskArchinzaSearch from "./AskArchinzaSearch";
import MasonryGrid from "./MasonaryGrid";

// Placeholder components for Saved and Settings
function Saved() {
  return <div className="p-4">🔖 Saved items will appear here.</div>;
}

function SettingsPanel() {
  return <div className="p-4">⚙️ Settings panel</div>;
}

export default function ExpandableSidebar() {
  const [expanded, setExpanded] = useState<boolean>(true); // desktop default open
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>("history");

  // keep sidebar expanded on large screens by default
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setExpanded(e.matches);
    };
    handler(mq);
    if (mq.addEventListener) mq.addEventListener("change", handler as any);
    else mq.addListener(handler as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler as any);
      else mq.removeListener(handler as any);
    };
  }, []);

  const navItems = [
    { key: "history", label: "Chat history", icon: <MessageSquare className="h-5 w-5" /> },
    { key: "saved", label: "Saved", icon: <Bookmark className="h-5 w-5" /> },
    { key: "recents", label: "Recents", icon: <Clock className="h-5 w-5" /> },
    { key: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ];

  const renderContent = () => {
    switch (activeKey) {
      case "history":
        return (
          <>
          <div className="flex flex-row">
            <ChatHistory />
            <AskArchinzaSearch />
            <MasonryGrid />
            </div>
          </>
        );
      case "saved":
        return <Saved />;
      case "settings":
        return <SettingsPanel />;
      default:
        return <div className="p-4">Select an option</div>;
    }
  };

  return (
    <div className="flex flex-row mx-auto px-4 py-0 gap-4">
      {/* Mobile: hamburger / open button */}
      <button
        aria-label="Open sidebar"
        className="md:hidden fixed bottom-6 right-6 z-40 inline-flex items-center justify-center h-12 w-12 rounded-full shadow-lg bg-white ring-1 ring-gray-200"
        onClick={() => setMobileOpen(true)}
      >
        <Plus className="h-5 w-5" />
      </button>

      {/* Sidebar overlay for mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <aside className="relative z-50 h-full w-72 bg-white shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="text-lg font-semibold">Menu</div>
              <button
                aria-label="Close sidebar"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
            <nav className="p-4">
              {navItems.map((it) => (
                <button
                  key={it.key}
                  onClick={() => {
                    setActiveKey(it.key);
                    setMobileOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-gray-50"
                >
                  <span>{it.icon}</span>
                  <span className="font-medium">{it.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className={`fixed left-0 top-0 z-30 h-full transform bg-white transition-all duration-200 ease-in-out border-r
          ${expanded ? "w-64 shadow-lg" : "w-16 shadow"}`}
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-2 p-4">
            <div className={`flex items-center gap-3 ${expanded ? "" : "justify-center w-full"}`}>
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold">
                A
              </div>
              {expanded && <div className="text-lg font-semibold">Archinza</div>}
            </div>

            <button
              aria-pressed={!expanded}
              aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
              onClick={() => setExpanded((s) => !s)}
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            >
              <svg
                className="h-4 w-4 transform"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 6L13 10L7 14V6Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <nav className="mt-2 flex-1 px-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveKey(item.key)}
                className={`group mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  expanded ? "justify-start" : "justify-center"
                } ${activeKey === item.key ? "bg-gray-100" : ""}`}
                title={item.label}
              >
                <span className="text-gray-700">{item.icon}</span>
                {expanded && <span className="truncate">{item.label}</span>}
              </button>
            ))}
          </nav>

          <div className="border-t p-3">
            <button
              className={`group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-gray-50 focus:outline-none ${
                expanded ? "justify-between" : "justify-center"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-700">
                  <LogOut className="h-5 w-5" />
                </div>
                {expanded && <span>Sign out</span>}
              </div>
              {expanded && <span className="text-xs text-gray-400">v1.0</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className={`${expanded ? "md:ml-64" : "md:ml-16"} flex-1`}>{renderContent()}</main>
    </div>
  );
}