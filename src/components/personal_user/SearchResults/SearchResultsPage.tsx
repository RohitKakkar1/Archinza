import React from "react";
import Header from "../../Header";
import ChatHistory from "./ChatHistory";
import AskArchinzaSearch from "./AskArchinzaSearch";
import ExpandableSidebar from "./SidebarExpanadable";
import MasonryGrid from "./MasonaryGrid";

export default function SearchResultsPage(): JSX.Element {
  return (
<div className="min-h-screen flex flex-col">
  {/* Main Content */}
  <div className="flex w-full  max-w-screen mx-auto gap-4">
    <ExpandableSidebar />
  </div>
</div>

  );
}
