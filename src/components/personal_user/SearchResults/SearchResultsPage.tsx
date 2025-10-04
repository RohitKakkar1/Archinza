import React, { useState, useEffect } from "react";
import Header from "../../Header";
import ExpandableSidebar from "./SidebarExpanadable";
import SearchResultMobile from "./SearchResultsMobile";

// Custom hook to detect mobile screens
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default function SearchResultsPage(): JSX.Element {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex w-full max-w-screen mx-auto gap-4">
        {/* Render sidebar based on screen size */}
        {isMobile ? <SearchResultMobile /> : <ExpandableSidebar />}

        {/* Main content placeholder */}
        <div className="flex-1">
          {/* Add your main search results content here */}
        </div>
      </div>
    </div>
  );
}
