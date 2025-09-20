import React, { useEffect, useState } from "react";
import SearchBar from "./search";

export default function HeroSection() {
  const videoSources = ["/Video/1.mp4", "/Video/2.mp4", "/Video/3.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Change video every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [videoSources.length]);

  return (
    <div className="relative w-full h-[320px] overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col py-16 h-[40%] text-center gap-4 px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-white">Hey Shruti</h1>
          <h2 className="text-lg text-gray-200">
            Let’s help you find what you love in design.
          </h2>
        </div>

        {/* Sticky Search */}
        <div className="sticky top-0 w-full max-w-xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
