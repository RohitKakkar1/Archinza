import React, { useEffect, useRef, useState } from "react";
import CarSpecsCard from "./CarSpecsCard";
import {
  MapPin,
  Globe,
  Calendar,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Can do Projects: <strong>Globally</strong>
      </>
    ),
  },
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Experience in: <strong>Architecture</strong>
      </>
    ),
  },
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Expert in: <strong>UX Design</strong>
      </>
    ),
  },
  {
    icon: <Globe className="w-4 h-4 shrink-0" />,
    text: (
      <>
        Available for: <strong>Collaboration</strong>
      </>
    ),
  },
];

const AboutMobile: React.FC = () => {
  const [active, setActive] = useState(1); // start with first card open
  const [index, setIndex] = useState(0); // rotating index for AnimatePresence
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const userInteracted = useRef(false);
  const lockRef = useRef(false);

  const ACTIVE_VH = 40; // expanded card
  const INACTIVE_VH = 10; // collapsed title-strip

  // Auto-rotate the `items` div
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mark user interaction so cards don't auto-flip on initial paint
  useEffect(() => {
    const markInteraction = () => (userInteracted.current = true);
    window.addEventListener("wheel", markInteraction, { passive: true });
    window.addEventListener("touchstart", markInteraction, { passive: true });
    window.addEventListener("keydown", markInteraction, { passive: true });
    return () => {
      window.removeEventListener("wheel", markInteraction);
      window.removeEventListener("touchstart", markInteraction);
      window.removeEventListener("keydown", markInteraction);
    };
  }, []);

  // Scroll listener with direction-aware logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!userInteracted.current) return;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      const viewportCenter = window.innerHeight / 2;
      let closestCardId = active;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const elemCenter = rect.top + rect.height / 2;

        let distance: number;
        if (isScrollingDown) {
          distance = Math.abs(elemCenter - viewportCenter);
        } else {
          const topThreshold = window.innerHeight * 0.25;
          distance =
            rect.top < topThreshold ? -Infinity : Math.abs(elemCenter - viewportCenter);
        }

        if (distance < closestDistance) {
          closestDistance = distance;
          const idAttr = card.getAttribute("data-id");
          if (idAttr) closestCardId = parseInt(idAttr, 10);
        }
      });

      if (closestCardId !== active && !lockRef.current) {
        lockRef.current = true;
        setActive(closestCardId);
        setTimeout(() => (lockRef.current = false), 300); // match CSS transition
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const setCardRef = (el: HTMLDivElement | null, idx: number) => {
    cardRefs.current[idx] = el;
  };

  const heightStyle = (isActive: boolean) => ({
    height: isActive ? `${ACTIVE_VH}vh` : `${INACTIVE_VH}vh`,
  });

  return (
    <div className="w-full">
      {/* Card 1 */}
      <div
  data-id="1"
  ref={(el) => setCardRef(el, 0)}
  onClick={() => {
    userInteracted.current = true;
    setActive(1);
  }}
  className="transition-all duration-300 overflow-hidden border-b border-gray-300 dark:border-gray-700 mx-4 mt-3 cursor-pointer"
>
  <div className="h-auto dark:bg-gray-900 flex flex-col">
    <h2 className="text-lg font-bold">Business Snapshot</h2>

    {active === 1 && (
      <div className="flex flex-col gap-4">
        <p className="text-sm mt-2">
          LTDF is a boutique architecture and interior design firm based
          in the heritage quarters of New Delhi, India. Established in
          1997
        </p>

        {/* Location & Reach */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span>
              2nd Floor, Pushpak 132 Ring Road, Satellite, Ahmedabad,
              Gujarat 380015, India
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            Estb. 1998
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            100+ Employees
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
            💾 152 Saves
          </span>
        </div>

        {/* Rotating Info */}
        <div className="relative h-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-gray-600 text-sm absolute"
            >
              {items[index].icon}
              <span>{items[index].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    )}
  </div>
</div>


      {/* Card 2 */}
      <div className="py-4">
        <CarSpecsCard
          setCardRef={setCardRef}
          setActive={setActive}
          active={active ?? -1}
          userInteracted={userInteracted}
          heightStyle={heightStyle}
        />
      </div>
    </div>
  );
};

export default AboutMobile;
