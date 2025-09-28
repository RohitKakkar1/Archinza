import { useRef, useEffect, useState } from "react";
import HeroSection from "./Hero_Section copy";
import VisualDiscovery from "../VisualDiscovery";
import { ArrowRight, MessageSquare, Image as ImageIcon } from "lucide-react";
import { Share2 } from "lucide-react";
import ChatDiscoveryPopup from "./searchpopup";

interface PromoCard {
  id: number;
  image: string;
  title: string;
  description: string;
  businessName: string;
  businessLogo: string;
}

export default function MobileCards() {
  const tabs = ["heyyfd", "Interests", "Saved", "Contact"];
  const [active, setActive] = useState("heyyfd");

  const [promoTab, setPromoTab] = useState("Recommended");

  // Refs for each section
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    heyyfd: useRef(null),
    Interests: useRef(null),
    Saved: useRef(null),
    Courses: useRef(null),
    Events: useRef(null),
    Contact: useRef(null),
  };

  // Observe which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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
    setActive(tab);
    const element = sectionRefs[tab].current;
    if (element) {
      const headerOffset = 110;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Promotional card data
  const promoCards: Record<string, PromoCard[]> = {
    Recommended: [
      {
        id: 1,
        image: "/PromotionTiles/1.png",
        title: "50% Off on All Courses",
        description: "Limited time offer. Enroll now and save big!",
        businessName: "Archinza Academy",
        businessLogo: "/PromotionTiles/logo1.png",
      },
      {
        id: 2,
        image: "/PromotionTiles/2.png",
        title: "Exclusive Design Consultation",
        description: "Book now to get a free consultation session.",
        businessName: "DesignWorks",
        businessLogo: "/PromotionTiles/logo2.png",
      },
      {
        id: 3,
        image: "/PromotionTiles/3.png",
        title: "Home Renovation Sale",
        description: "Save up to 40% on renovation services.",
        businessName: "RenovatePro",
        businessLogo: "/PromotionTiles/logo3.png",
      },
    ],
    Trending: [
      {
        id: 4,
        image: "/PromotionTiles/1.png",
        title: "Trending Architecture Courses",
        description: "Join thousands of learners today.",
        businessName: "Archinza Academy",
        businessLogo: "/PromotionTiles/logo1.png",
      },
    ],
    New: [
      {
        id: 5,
        image: "/PromotionTiles/2.png",
        title: "New Designer Tools",
        description: "Upgrade your design workflow today.",
        businessName: "DesignWorks",
        businessLogo: "/PromotionTiles/logo2.png",
      },
    ],
  };
    const [isChatOpen, setIsChatOpen] = useState(false);
  

  return (
    <div className="md:flex-row h-screen dark:bg-gray-900 md:py-2 md:pr-2 bg-blue-900">
      
      <div className="bg-white flex flex-col w-full h-screen">
            <div className="flex-1">
              <section className="mx-0">
                  <HeroSection />
              </section>
               <div className="p-6">
                    {/* Button to open popup */}
                    <button
                      onClick={() => setIsChatOpen(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Chat
                    </button>
              
                    {/* Render the popup only when open */}
                    {isChatOpen && (
                      <ChatDiscoveryPopup onClose={() => setIsChatOpen(false)} />
                    )}
                  </div>
              <section className="h-[40vh]">
                <VisualDiscovery />
              </section>
            </div>

            {/* Right Panel for Promotions */}
            <div className="w-screen bg-gray-100 dark:bg-gray-800 p-4
                            md:max-h-screen md:sticky md:top-0">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Matchmade for you
              </h2>

              {/* Tabs */}
              <div className="flex space-x-2 mb-4">
                {Object.keys(promoCards).map((tab) => (
                  <button
                    key={tab}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      promoTab === tab
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => setPromoTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Cards */}
              <div className="space-y-4 w-fit flex flex-row">
                {promoCards[promoTab].map((card) => (
                  <div
                    key={card.id}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <div className="flex items-center mt-2 space-x-2">
                      <img
                        src={card.businessLogo}
                        alt={card.businessName}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {card.businessName}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {card.description}
                    </p>
                    <button className="mt-2 text-xs text-blue-600 hover:underline">
                      View Offer
                    </button>
                  </div>
                ))}
              </div>
            </div>
</div>

    </div>
  );
}
