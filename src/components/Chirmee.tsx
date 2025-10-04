import { useState, useRef, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
} from "recharts";

const geographyData = [
  { location: "Kanpur", searches: 120 },
  { location: "Delhi", searches: 95 },
  { location: "Lucknow", searches: 80 },
  { location: "Noida", searches: 50 },
];

const engagementData = [
  { month: "Jan", calls: 30, messages: 20 },
  { month: "Feb", calls: 45, messages: 25 },
  { month: "Mar", calls: 60, messages: 40 },
  { month: "Apr", calls: 50, messages: 30 },
];

interface InsightsMobileProps {
  onClose: () => void;
}

export default function InsightsMobile({ onClose }: InsightsMobileProps) {
  const tabs = ["Overview", "Discovery", "Content Insights", "Geography", "MiniBot"];
  const [active, setActive] = useState("Overview");

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    Overview: useRef(null),
    Discovery: useRef(null),
    "Content Insights": useRef(null),
    Geography: useRef(null),
    MiniBot: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab: string) => {
    const element = sectionRefs[tab].current;
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="top-0">
      <div className="sticky top-0 z-20 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Close
          </button>
          <h2 className="text-lg font-medium dark:text-white">Insights for You</h2>
        </div>

        <div className="flex gap-3 px-4 py-2 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                active === tab
                  ? "bg-orange-500 dark:bg-orange-700 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 p-4">
        {/* Overview */}
        <div id="Overview" ref={sectionRefs.Overview} className="space-y-4">
          <h2 className="text-lg font-semibold">Overview</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-sm font-medium text-gray-500">Discovery</h3>
              <p className="text-lg font-bold">508 Views</p>
              <p className="text-xs text-gray-500">CTR: 32%</p>
            </div>
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-sm font-medium text-gray-500">Engagement</h3>
              <p className="text-lg font-bold">16 Calls</p>
              <p className="text-xs text-gray-500">213 Directions</p>
            </div>
          </div>
        </div>

        {/* Discovery */}
        <div id="Discovery" ref={sectionRefs.Discovery} className="space-y-4">
          <h2 className="text-lg font-semibold">Discovery Insights</h2>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <p className="text-sm text-gray-500">Top Search</p>
              <p className="font-bold">“Architects in Kanpur”</p>
            </div>
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <p className="text-sm text-gray-500">AI CTR</p>
              <p className="font-bold">32%</p>
            </div>
          </div>
        </div>

        {/* Content Insights */}
        <div id="Content Insights" ref={sectionRefs["Content Insights"]} className="space-y-4">
          <h2 className="text-lg font-semibold">Content Insights</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow">
              <img src="/BusinessView/Wriver/1.jpg" alt="villa" className="rounded-lg mb-2" />
              <p className="text-sm">Villa Design</p>
              <p className="text-xs text-gray-500">Most Viewed</p>
            </div>
          </div>
        </div>

        {/* Geography */}
        <div id="Geography" ref={sectionRefs.Geography} className="space-y-4">
          <h2 className="text-lg font-semibold">Geography Insights</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={geographyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="searches" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* MiniBot */}
        <div id="MiniBot" ref={sectionRefs.MiniBot} className="space-y-4">
          <h2 className="text-lg font-semibold">MiniBot Activity</h2>
          <p className="text-sm text-gray-500">Analytics from AI interactions</p>
        </div>
      </div>
    </section>
  );
}
