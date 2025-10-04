import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { User } from "lucide-react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";

// Sample Data
const geographyData = [
  { location: "Kanpur", searches: 120 },
  { location: "Delhi", searches: 95 },
  { location: "Lucknow", searches: 80 },
  { location: "Noida", searches: 50 },
];

const topContent = [
  { title: "Villa Design", img: "/BusinessView/Wriver/1.jpg", views: "Most Viewed" },
  { title: "Office Interior", img: "/BusinessView/Wriver/6.jpg", views: "Trending" },
  { title: "Villa Design", img: "/BusinessView/Wriver/1.jpg", views: "Most Viewed" },
  { title: "Office Interior", img: "/BusinessView/Wriver/6.jpg", views: "Trending" },
  { title: "Villa Design", img: "/BusinessView/Wriver/1.jpg", views: "Most Viewed" },
  { title: "Office Interior", img: "/BusinessView/Wriver/6.jpg", views: "Trending" },
  { title: "Villa Design", img: "/BusinessView/Wriver/1.jpg", views: "Most Viewed" },
  { title: "Office Interior", img: "/BusinessView/Wriver/6.jpg", views: "Trending" },
];

const minibotData = [
  { query: "Rohit Kakkar", result: "What are the top architects in Kanpur?" },
  { query: "Ananya Singh", result: "Can I get villa design ideas for a 3BHK?" },
  { query: "Vikram Patel", result: "What’s the average cost for office interiors?" },
  { query: "Priya Sharma", result: "Any trending modern interior designers?" },
  { query: "Rahul Verma", result: "How many architects are available in Noida?" },
  { query: "Sneha Gupta", result: "Can I schedule a consultation with a designer?" },
];

// Card definitions
const cardData = [
  { title: "Business Insights", color: "bg-blue-900", icon: <User size={20} /> },
  { title: "Content Insights", color: "bg-blue-900", icon: <User size={20} /> },
  { title: "Query Cards", color: "bg-blue-900", icon: <User size={20} /> },
];

// Modal Component
const Modal = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/60">
      <div className="w-[100vw] h-[100vh] bg-white dark:bg-gray-900 flex flex-col">
        {children}
      </div>
    </div>,
    document.body
  );
};

interface InsightsMobileProps {
  onClose: () => void;
  initialTab: string;
}

const InsightsMobile = ({ onClose, initialTab }: InsightsMobileProps) => {
  const tabs = ["Business Insights", "Content Insights", "Query Cards"];
  const [active, setActive] = useState(initialTab);

  const containerRef = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false); // ✅ track initial scroll

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    "Business Insights": useRef(null),
    "Content Insights": useRef(null),
    "Query Cards": useRef(null),
  };

  // Scroll to initial tab once on mount
  useEffect(() => {
    const element = sectionRefs[initialTab].current;
    if (element && containerRef.current) {
      const headerHeight = 80;
      containerRef.current.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "auto", // scroll immediately
      });
      hasScrolledRef.current = true; // ✅ mark that initial scroll is done
    }
  }, [initialTab]);

  // Intersection observer to update active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!hasScrolledRef.current) return; // skip until initial scroll is done
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
    if (element && containerRef.current) {
      const headerHeight = 80;
      containerRef.current.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full h-full flex flex-col">
      {/* Sticky Header and Tabs */}
      <div className="flex-none sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-md">
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
          </button>
          <h2 className="text-lg font-medium dark:text-white text-center flex-1">
            Insights for You
          </h2>
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

      {/* Scrollable Content */}
      <div ref={containerRef} className="flex-1 overflow-auto space-y-6 p-4">
        {/* Business Insights */}
        <div id="Business Insights" ref={sectionRefs["Business Insights"]} className="space-y-4">
          <h2 className="text-lg font-semibold">Business Insights</h2>
          <div className="flex flex-col gap-4">
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
              <h3 className="text-sm font-medium text-gray-500">Geography</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={geographyData} margin={{ top: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => [`${value} searches`, "Searches"]} />
                  <Bar dataKey="searches" fill="#f97316" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Content Insights */}
        <div id="Content Insights" ref={sectionRefs["Content Insights"]} className="space-y-4">
          <h2 className="text-lg font-semibold">Content Insights</h2>
          <div className="grid grid-cols-2 gap-3">
            {topContent.map((content, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow">
                <img src={content.img} alt={content.title} className="rounded-lg mb-2" />
                <p className="text-sm">{content.title}</p>
                <p className="text-xs text-gray-500">{content.views}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Query Cards */}
        <div id="Query Cards" ref={sectionRefs["Query Cards"]} className="space-y-4">
          <h2 className="text-lg font-semibold">Query Cards</h2>
          <div className="grid grid-cols-1 gap-3">
            {minibotData.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
                <p className="text-sm font-medium ">{item.query}</p>
                <p className="text-lg font-xs">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main BusinessStatus Component
const BusinessStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Business Insights");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (tab: string) => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full px-4 py-4">
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 90}%)` }}
        >
          {cardData.map((card, idx) => (
            <div
              key={card.title}
              onClick={() => handleOpen(card.title)}
              className={`flex-shrink-0 w-full py-16 max-w-xs mx-auto cursor-pointer flex items-center gap-3 p-6 rounded-xl shadow-md ${card.color} text-white hover:opacity-90 transition`}
            >
              {card.icon}
              <span className="font-medium">{card.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {cardData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === idx ? "bg-gray-800 dark:bg-white" : "bg-gray-400 dark:bg-gray-500"
            }`}
          ></span>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <Modal>
          <InsightsMobile onClose={() => setIsOpen(false)} initialTab={activeTab} />
        </Modal>
      )}
    </div>
  );
};

export default BusinessStatus;
