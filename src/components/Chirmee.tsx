import { useState, useRef, useEffect } from "react"
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
} from "recharts"
import BusinessCarousel from "./InsightsCarousel";

const geographyData = [
  { location: "Kanpur", searches: 120 },
  { location: "Delhi", searches: 95 },
  { location: "Lucknow", searches: 80 },
  { location: "Noida", searches: 50 },
];
const discoveryData = [
  { month: "Apr", views: 200 },
  { month: "May", views: 250 },
  { month: "Jun", views: 300 },
  { month: "Jul", views: 260 },
  { month: "Aug", views: 280 },
  { month: "Sep", views: 350 },
];

// Dummy Data
const engagementData = [
  { month: "Jan", calls: 30, messages: 20 },
  { month: "Feb", calls: 45, messages: 25 },
  { month: "Mar", calls: 60, messages: 40 },
  { month: "Apr", calls: 50, messages: 30 },
]

const aiSuggestions = [
  { feature: "Photos", score: 80 },
  { feature: "Profile", score: 65 },
  { feature: "Reviews", score: 90 },
]

export default function InsightsMobile() {
  const tabs = [
    "Overview",
    "Discovery",
    "Engagement",
    "Content Insights",
    "Geography",
    "MiniBot",
  ]
  const [active, setActive] = useState("Overview")

  // Refs for each section
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    Overview: useRef(null),
    Discovery: useRef(null),
    Engagement: useRef(null),
    "Content Insights": useRef(null),
    Geography: useRef(null),
        MiniBot: useRef(null),

  }

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  // Tab click scroll
  const handleTabClick = (tab: string) => {
    setActive(tab)
    const element = sectionRefs[tab].current
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="top-0">
<div className="p-4">
            <BusinessCarousel /></div>
      
      {/* Tabs (Sticky) */}
      <div className="block sticky top-0 z-20 bg-white dark:bg-gray-800">
        <div
          className="flex gap-3 px-4 py-2 mb-0 border-b-2 border-gray-100 dark:border-gray-700 
                     overflow-x-auto whitespace-nowrap 
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
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
      </div>

      {/* Sections */}
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
        </div>

        {/* Discovery */}
        <div id="Discovery" ref={sectionRefs.Discovery} className="space-y-4">
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
        </div>

        {/* Engagement */}
        <div id="Engagement" ref={sectionRefs.Engagement} className="space-y-4">
          <h2 className="text-lg font-semibold">Engagement</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={engagementData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="calls" stroke="#f97316" />
              <Line type="monotone" dataKey="messages" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Content Insights */}
                  <div
          id="Content Insights"
          ref={sectionRefs["Content Insights"]}
          className="space-y-4"
        >
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
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow">
                <img src="/BusinessView/Wriver/6.jpg" alt="office" className="rounded-lg mb-2" />
                <p className="text-sm">Office Interior</p>
                <p className="text-xs text-gray-500">Trending</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow">
                <img src="/BusinessView/Wriver/6.jpg" alt="office" className="rounded-lg mb-2" />
                <p className="text-sm">Office Interior</p>
                <p className="text-xs text-gray-500">Trending</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">✨ Upload 3 more interior photos to boost discovery.</p>
          </div>

        {/* Geography */}
        <div id="Geography" ref={sectionRefs.Geography} className="space-y-4">
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

                          {/* Minibot */}
        <div id="MiniBot" ref={sectionRefs.MiniBot} className="space-y-4">
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
      </div>
    </section>
  )
}
