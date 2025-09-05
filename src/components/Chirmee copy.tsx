import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, CartesianGrid
} from "recharts";
import BusinessCarousel from "./InsightsCarousel";

// Tabs
type Tab =
  | "Overview"
  | "Discovery"
  | "Engagement"
  | "Content"
  | "Geography"
  | "AI";

// Dummy Data
const discoveryData = [
  { month: "Apr", views: 200 },
  { month: "May", views: 250 },
  { month: "Jun", views: 300 },
  { month: "Jul", views: 260 },
  { month: "Aug", views: 280 },
  { month: "Sep", views: 350 },
];

const engagementData = [
  { month: "Apr", calls: 2 },
  { month: "May", calls: 6 },
  { month: "Jun", calls: 8 },
  { month: "Jul", calls: 4 },
  { month: "Aug", calls: 3 },
  { month: "Sep", calls: 1 },
];

const geographyData = [
  { location: "Kanpur", searches: 120 },
  { location: "Delhi", searches: 95 },
  { location: "Lucknow", searches: 80 },
  { location: "Noida", searches: 50 },
];

const MobileInsights: React.FC = () => {
  const [active, setActive] = useState<Tab>("Overview");

  const tabs: Tab[] = [
    "Overview",
    "Discovery",
    "Engagement",
    "Content",
    "Geography",
    "AI",
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4">

      <BusinessCarousel />
      {/* Filters */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Time Period
        </label>
        <select className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white">
          <option>Apr 2025 – Sept 2025</option>
          <option>Oct 2024 – Mar 2025</option>
        </select>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-3 px-4 py-2 mb-4 border-b-2 border-gray-100 dark:border-gray-700 
                   overflow-x-auto whitespace-nowrap 
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition 
              ${
                active === tab
                  ? "bg-orange-500 dark:bg-orange-700 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* OVERVIEW */}
        {active === "Overview" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Business Snapshot</h2>
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
              <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <h3 className="text-sm font-medium text-gray-500">Content</h3>
                <p className="text-lg font-bold">Top Photo</p>
                <p className="text-xs text-gray-500">Villa Design</p>
              </div>
              <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <h3 className="text-sm font-medium text-gray-500">Geography</h3>
                <p className="text-lg font-bold">Kanpur</p>
                <p className="text-xs text-gray-500">120 Searches</p>
              </div>
            </div>

            {/* Funnel Preview */}
            <div className="mt-5 p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Lead Funnel</h3>
              <ul className="space-y-1 text-sm">
                <li>👀 Views → 508</li>
                <li>💬 Inquiries → 120</li>
                <li>📞 Calls → 16</li>
                <li>✅ Conversions → 15%</li>
              </ul>
            </div>
          </div>
        )}

        {/* DISCOVERY */}
        {active === "Discovery" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Discovery Insights</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={discoveryData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#f97316" />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <p className="text-sm text-gray-500">Top Search</p>
                <p className="font-bold">“Architects in Kanpur”</p>
              </div>
              <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <p className="text-sm text-gray-500">AI CTR</p>
                <p className="font-bold">32%</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">📈 Profiles with complete info appear in 2x more searches.</p>
          </div>
        )}

        {/* ENGAGEMENT */}
        {active === "Engagement" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Engagement Insights</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={engagementData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="calls" stroke="#f97316" />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                <h3 className="text-sm text-gray-500">Calls</h3>
                <p className="text-xl font-bold">16</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                <h3 className="text-sm text-gray-500">Directions</h3>
                <p className="text-xl font-bold">213</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                <h3 className="text-sm text-gray-500">Response Time</h3>
                <p className="text-xl font-bold">1.2 hrs</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                <h3 className="text-sm text-gray-500">Conversions</h3>
                <p className="text-xl font-bold">15%</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">💡 Respond within 30 mins to double conversions.</p>
          </div>
        )}

        {/* CONTENT */}
        {active === "Content" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Content Insights</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow">
                <img src="/BusinessView/Wriver/1.jpg" alt="villa" className="rounded-lg mb-2" />
                <p className="text-sm">Villa Design</p>
                <p className="text-xs text-gray-500">Most Viewed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow">
                <img src="/BusinessView/Wriver/6.jpg" alt="office" className="rounded-lg mb-2" />
                <p className="text-sm">Office Interior</p>
                <p className="text-xs text-gray-500">Trending</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">✨ Upload 3 more interior photos to boost discovery.</p>
          </div>
        )}

        {/* GEOGRAPHY */}
        {active === "Geography" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Geography Insights</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={geographyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="searches" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-3 text-xs text-gray-500">📍 Kanpur leads with 120 searches, Delhi is growing fastest (+20%).</p>
          </div>
        )}

        {/* AI */}
        {active === "AI" && (
          <div>
            <h2 className="text-lg font-semibold mb-3">AI & Matchmaking Insights</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <p className="text-sm text-gray-500">Match Accuracy</p>
                <p className="text-xl font-bold">82%</p>
              </div>
              <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <p className="text-sm text-gray-500">AI CTR</p>
                <p className="text-xl font-bold">32%</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">⏱️ Avg time to find vendors reduced by 30% using Archinza AI.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileInsights;
