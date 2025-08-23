import React, { useEffect, useRef, useState } from "react";

const AboutMobile: React.FC = () => {
  const [active, setActive] = useState(1); // start with first card open
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const userInteracted = useRef(false);
  const lockRef = useRef(false);

  const ACTIVE_VH = 40;   // expanded card
  const INACTIVE_VH = 10; // collapsed title-strip

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
          // Scroll down: use center-distance logic
          distance = Math.abs(elemCenter - viewportCenter);
        } else {
          // Scroll up: bias toward top threshold
          const topThreshold = window.innerHeight * 0.25;
          distance = rect.top < topThreshold ? -Infinity : Math.abs(elemCenter - viewportCenter);
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
        style={heightStyle(active === 1)}
        className="transition-all duration-300 overflow-hidden border-b border-gray-300 dark:border-gray-700 mx-4 mt-3 cursor-pointer"
      >
        <div className="h-full bg-white dark:bg-gray-900 flex flex-col">
          <h2 className="text-lg font-bold">Business Snapshot</h2>
          {active === 1 && (
            <p className="text-sm mt-2">
              This card is expanded. Scroll down (or tap) to show Card 2.
            </p>
          )}
        </div>
      </div>

      {/* Card 2 */}
      <div
        data-id="2"
        ref={(el) => setCardRef(el, 1)}
        onClick={() => {
          userInteracted.current = true;
          setActive(2);
        }}
        style={heightStyle(active === 2)}
        className="transition-all duration-300 overflow-hidden border-b border-gray-300 dark:border-gray-700 mx-4 mt-3 cursor-pointer"
      >
        <div className="h-full bg-white dark:bg-gray-900 flex flex-col">
          <h2 className="text-lg font-bold">Project related Details</h2>
          {active === 2 && (
            <p className="text-sm mt-2">Card 2 expanded. Scroll up to go back.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default AboutMobile;
