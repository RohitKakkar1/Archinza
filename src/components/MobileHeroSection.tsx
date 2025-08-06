import React, { useEffect, useRef } from 'react';

const data = [
  { image: '/HomeGrid/Worker.png', label: 'Manufacturers' },
  { image: '/HomeGrid/wardrobe.png', label: 'Wardrobe' },
  { image: '/HomeGrid/PR.png', label: 'Support Design' },
  { image: '/HomeGrid/skyscraper.png', label: 'Insights' },
  { image: '/HomeGrid/site.png', label: 'Site Visit' },
  { image: '/HomeGrid/farmhouse.png', label: 'Farmhouse' },
  { image: '/HomeGrid/white_interior.png', label: 'Interior' },
  { image: '/HomeGrid/siteworker.png', label: 'Contractors' },
  { image: '/HomeGrid/Course.png', label: 'Courses' },
  { image: '/HomeGrid/job.png', label: 'Job' },
  { image: '/HomeGrid/kitchen.png', label: 'Kitchen' },
  { image: '/HomeGrid/camera.png', label: '' },
  { image: '/HomeGrid/Wall.png', label: 'Walls' },
  { image: '/HomeGrid/washroom.png', label: 'Washroom' },
  { image: '/HomeGrid/sofa.png', label: 'Products' },
  { image: '/HomeGrid/Material.png', label: 'Materials' },
];

const MobileHeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create 5 columns with 2 images each, repeating
  const columns = Array.from({ length: 5 }).map((_, colIdx) => {
    const top = data[(colIdx * 2) % data.length];
    const bottom = data[(colIdx * 2 + 1) % data.length];
    return [top, bottom];
  });

  const allColumns = [...columns, ...columns]; // 10 columns for infinite scroll

useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  let scrollAmount = 0;
  const scrollSpeed = 0.5;
  let animationFrameId: number;

  const scroll = () => {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= container.scrollWidth / 2) {
      scrollAmount = 0;
    }
    container.scrollLeft = scrollAmount;
    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, []);


  return (
    <section className="block bg-gray-100 dark:bg-gray-800 pb-12 md:hidden w-full px-4 pt-12 overflow-hidden">
        <div className="max-w-full mt-2 px-4">
            <div className="font-sans text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
                <span className="text-blue-600 font-bold dark:text-blue-400">Find</span>
                <span className="mx-2 dark:text-white">and</span>
                <span className="text-blue-600 font-bold dark:text-blue-400">be found</span>
<span className="block text-black dark:text-white mt-2 text-lg sm:text-xl font-normal">
                    at every step of your Design & Build journey.
                </span>
                </h2>
                <p className="text-lg sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                Discovery made easy using Archinza’s intelligent AI solutions.
                </p>
            </div>
            </div>


      <div
        ref={containerRef}
        className="flex gap-4 w-full overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {allColumns.map((pair, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 shrink-0"
            style={{
              width: '45vw',
              marginTop:
                index % 5 === 0
                  ? '64px'
                  : index % 5 === 2
                  ? '36px'
                  : index % 5 === 4
                  ? '0px'
                  : '0px',
            }}
          >
            {pair.map((item, idx) => (
              <div
                key={idx}
                className="relative w-full rounded-xl overflow-hidden"
                style={{ aspectRatio: '4 / 5' }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    const aspect = img.naturalWidth / img.naturalHeight;
                    img.parentElement?.style.setProperty('aspect-ratio', `${aspect}`);
                  }}
                />
                {item.label && (
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileHeroSection;
