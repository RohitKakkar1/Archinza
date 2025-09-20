import React from "react";
import Header from "../../Header";
import ChatHistory from "./ChatHistory";
import AskArchinzaSearch from "./AskArchinzaSearch";
import ExpandableSidebar from "./SidebarExpanadable";
import MasonryGrid from "./MasonaryGrid";

export default function SearchResultsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f9f6fb] flex flex-col">


      {/* Main Content */}
      <div className="flex flex-row mx-auto px-4 py-0 gap-4">
        <ExpandableSidebar />

      </div>
    </div>
  );
}
