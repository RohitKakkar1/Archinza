import React, { useEffect, useState } from "react";
import SearchBar from "../search";

export default function HeroSection() {
  const videoSources = ["/Video/1.mp4", "/Video/2.mp4", "/Video/3.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Change video every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [videoSources.length]);

  return (
    <div className="relative w-full h-[360px] overflow-hidden">
      {/* Background Videos with fade */}
      {videoSources.map((src, i) => (
        <video
          key={i}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === currentVideo ? "opacity-70" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-6 gap-6">
        {/* Hi Shruti */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Hi Shruti
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-xl">
          <SearchBar />
        </div>

        {/* Additional content below search bar */}
        <div className="mt-4 text-center text-gray-200 space-y-2">
          <p className="text-sm md:text-base">
            Discover curated design inspiration, projects, and ideas.
          </p>
          <p className="text-sm md:text-base">
            Explore trending concepts, top creators, and personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
