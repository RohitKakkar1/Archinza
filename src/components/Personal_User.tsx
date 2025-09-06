import { ArrowRight, MessageSquare, Image as ImageIcon } from "lucide-react";
import Header from "./Header";
import DualLevelTabs from "./personal_user/Dual_level_tabs";
import SearchBar from "./personal_user/search";
import Middle from "./personal_user/Stack";

export default function MobileCards() {
  return (
    <div>
      <Header />
      <div className="flex flex-col relative bg-white dark:bg-gray-900 p-4 ">
        {/* Greeting */}
        <div className="flex flex-col mb-4 gap-2">
          <h1 className="text-3xl font-regular">Hey Shruti</h1>
          <h2 className="text-gray-600 dark:text-gray-300">
            Let’s help you find what you love in design.
          </h2>
        </div>

        {/* Sticky Search */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900">
          <SearchBar />
        </div>

        {/* Middle (scrolls away) */}
        {/* <div className="my-4">
          <Middle />
        </div> */}

        {/* Sticky Dual Tabs */}
        <div className="sticky top-24 z-100 bg-white dark:bg-gray-900">
          <DualLevelTabs />
        </div>
      </div>
    </div>
  );
}
