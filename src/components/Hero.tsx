import React, { useEffect, useState, useRef } from 'react';


// Image data
const data = [
  { image: '/HomeGrid/Worker.png', label: '' },
  { image: '/HomeGrid/wardrobe.png', label: 'Wardrobe' },
  { image: '/HomeGrid/PR.png', label: 'Support Design' },
  { image: '/HomeGrid/skyscraper.png', label: '' },
  { image: '/HomeGrid/site.png', label: '' },
  { image: '/HomeGrid/farmhouse.png', label: 'Farm House' },
  { image: '/HomeGrid/white_interior.png', label: 'White Interior' },
  { image: '/HomeGrid/siteworker.png', label: 'Site Worker' },
  { image: '/HomeGrid/Course.png', label: 'Course' },
  { image: '/HomeGrid/job.png', label: 'Job' },
  { image: '/HomeGrid/kitchen.png', label: 'Kitchen' },
  { image: '/HomeGrid/camera.png', label: '' },
  { image: '/HomeGrid/Wall.png', label: '' },
  { image: '/HomeGrid/washroom.png', label: 'Washroom' },
  {
    image: '/HomeGrid/sofa.png',
    label: 'Search Product and Materials',
    labelIcon: '/HomeGrid/sofa.png',
  },
  { image: '/HomeGrid/Material.png', label: '' },
];

const imagePairs = [
  [0, 15],
  [1, 14],
  [2, 13],
  [3, 12],
  [4, 11],
  [5, 10],
  [6, 9],
  [7, 8],
];

const intervals = [3000, 4000, 5000, 7000, 8000, 5000, 4000, 6000];

const ImageCard = ({
  image,
  label,
  labelIcon,
  showLabel,
}: {
  image: string;
  label: string;
  labelIcon?: string;
  showLabel: boolean;
}) => {
  const [visible, setVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(image);
  const [currentLabel, setCurrentLabel] = useState(label);
  const [currentLabelIcon, setCurrentLabelIcon] = useState(labelIcon);
  const [position, setPosition] = useState({ top: '10px', left: '10px' });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getRandomPosition = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const labelWidth = 120;
      const labelHeight = 40;

      const maxLeft = containerWidth - labelWidth;
      const maxTop = containerHeight - labelHeight;

      const left = Math.random() * maxLeft;
      const top = Math.random() * maxTop;

      return {
        top: `${top}px`,
        left: `${left}px`,
      };
    }
    return { top: '10px', left: '10px' };
  };

  useEffect(() => {
    if (image !== currentImage || label !== currentLabel) {
      setVisible(false);
      const timeout = setTimeout(() => {
        setCurrentImage(image);
        setCurrentLabel(label);
        setCurrentLabelIcon(labelIcon);
        setPosition(getRandomPosition());
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [image, label]);

  return (
    <div
      ref={containerRef}
      className={`relative rounded-xl transition-opacity duration-700 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={currentImage}
        alt={currentLabel}
        className="w-full h-auto object-cover rounded-xl"
      />
      {showLabel && currentLabel && (
        <span
          className="absolute z-10 bg-black/60 text-white text-s px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 transition-all duration-700 ease-in-out"
          style={position}
        >
          {currentLabelIcon && (
            <img src={currentLabelIcon} alt="icon" className="w-4 h-4" />
          )}
          {currentLabel}
        </span>
      )}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    imagePairs.map(([indexA]) => indexA)
  );

  useEffect(() => {
    const timeouts = imagePairs.map((pair, i) =>
      setInterval(() => {
        setActiveIndexes((prev) => {
          const newIndexes = [...prev];
          const [a, b] = pair;
          newIndexes[i] = prev[i] === a ? b : a;
          return newIndexes;
        });
      }, intervals[i])
    );
    return () => timeouts.forEach(clearInterval);
  }, []);

  return (
    <section className="flex-1 bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
      <div className="max-w-7xl mt-16 mx-auto">
        <div className="font-sans text-center mb-8 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl mb-4">
            <span className="text-blue-600 font-bold dark:text-blue-400">Find</span>
            <span className="mx-2 dark:text-white">and</span>
            <span className="text-blue-600 font-bold dark:text-blue-400">be found</span>
            <span className="block text-black dark:text-white">
              at every step of your Design & Build journey.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discovery made easy using Archinza’s intelligent AI solutions.
          </p>
        </div>
      </div>

      <div className="flex gap-4 px-4 h-[90vh] overflow-hidden">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 mt-56 w-1/5">
          <ImageCard {...data[activeIndexes[0]]} showLabel={true} />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 mt-0 w-1/5">
          <ImageCard {...data[activeIndexes[1]]} showLabel={true} />
          <ImageCard {...data[activeIndexes[2]]} showLabel={true} />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 mt-24 w-1/5">
          <ImageCard {...data[activeIndexes[3]]} showLabel={true} />
          <ImageCard {...data[activeIndexes[4]]} showLabel={true} />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 mt-0 w-1/5">
          <ImageCard {...data[activeIndexes[5]]} showLabel={true} />
          <ImageCard {...data[activeIndexes[6]]} showLabel={true} />
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4 mt-56 w-1/5">
          <ImageCard {...data[activeIndexes[7]]} showLabel={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
