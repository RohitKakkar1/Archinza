import React, { useState } from "react";
import {
  MessageSquare,
  Bookmark,
  Settings,
  Clock,
  LogOut,
  Plus,
} from "lucide-react";
import ChatHistory from "./ChatHistory";
import AskArchinzaSearch from "./AskArchinzaSearch";
import MasonryGrid from "./MasonaryGrid";
import Saved from "./saved";
import BusinessChats from "./BusinessChats";
import SettingsPanel from "./Settings";
import MobileCards from "./Main";

export default function ExpandableSidebar() {
  const [expanded, setExpanded] = useState<boolean>(false); // Desktop expanded by default
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>("history");

  const navItems = [
        // { key: "recents", label: "Archinza AI", icon: <Clock className="h-5 w-5" /> },
    { key: "history", label: "Ask & Search", icon: <MessageSquare className="h-5 w-5" /> },
    { key: "Chats", label: "Business Chats", icon: <MessageSquare className="h-5 w-5" /> },
    { key: "saved", label: "Saved", icon: <Bookmark className="h-5 w-5" /> },
    { key: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ];

  const renderContent = () => {
    switch (activeKey) {
      case "history":
        return <ChatHistory />;
      case "saved":
        return <Saved />;
      case "settings":
        return <SettingsPanel />;
      case "Chats":
        return <BusinessChats />;
      default:
        return <MobileCards />;
    }
  };

  return (
    <div className="flex flex-row w-full ">
      {/* Mobile hamburger button */}
      <button
        aria-label="Open sidebar"
        className="md:hidden fixed bottom-6 right-6 z-40 inline-flex items-center justify-center h-12 w-12 rounded-full shadow-lg bg-white ring-1 ring-gray-200"
        onClick={() => setMobileOpen(true)}
      >
        <Plus className="h-5 w-5" />
      </button>

      {/* Mobile Sidebar Overlay */}
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
            <nav className="p-4 flex flex-col gap-2">
              {navItems.map((it) => (
                <button
                  key={it.key}
                  onClick={() => {
                    setActiveKey(it.key);
                    setMobileOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-gray-50"
                >
                  {it.icon}
                  <span className="font-medium">{it.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`hidden  md:flex flex-col h-full bg-blue-900 z-30 transition-all duration-200 ${
          expanded ? "w-64 shadow-lg" : "w-20 shadow"
        }`}
      >
<div className="flex flex-col items-center p-3">
  {/* Clickable logo */}
  <button
    onClick={() => setActiveKey("recents")} // "recents" opens <MobileCards />
    className="flex flex-col items-center focus:outline-none"
  >
    <img
      src="/Archinza.svg"
      alt="Archinza"
      className="h-10 w-10 object-cover rounded-full"
    />

    {!expanded && (
      <div className="text-xs mt-1 text-white text-center">Archinza AI</div>
    )}
    {expanded && (
      <div className="text-lg font-semibold text-center text-white">
        Archinza AI
      </div>
    )}
  </button>
</div>


{/* Nav items */}
<nav className="flex-1 px-2 py-24 flex flex-col items-center gap-4">
  {navItems.map((item) => (
    <button
      key={item.key}
      onClick={() => setActiveKey(item.key)}
      className={`
        relative flex flex-col items-center justify-center gap-1 rounded-md p-2 text-sm w-full
        ${activeKey === item.key ? "bg-white/20 text-white font-semibold shadow-xl" : "text-white/80 hover:bg-white/20 hover:text-white"}
      `}
      title={item.label}
    >
      {/* Icon + Notification wrapper */}
      <div className="relative">
        <span>{item.icon}</span>

        {/* 🔴 Notification Badge for BusinessChat */}
        {item.key === "Chats" && (
          <span className="absolute -top-1 -right-3 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
            2
          </span>
        )}
      </div>

      {!expanded && <span className="text-[10px]">{item.label}</span>}
      {expanded && <span className="truncate">{item.label}</span>}
    </button>
  ))}
</nav>



        {/* Footer */}
        <div className="border-t p-3">
          <button className="group flex w-full items-center justify-center gap-1 rounded-md px-3 py-2 text-sm hover:bg-white/20">
            <LogOut className="h-5 w-5 text-white" />
            {expanded && <span>Sign out</span>}
            {expanded && <span className="text-xs text-gray-400 ml-auto">v1.0</span>}
            {!expanded && <span className="text-[10px] text-white">Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
<main className="flex-1 w-full flex transition-all duration-200">
  {renderContent()}
</main>

    </div>
  );
}
