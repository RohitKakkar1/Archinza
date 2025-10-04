import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import AskArchinzaSearch from "./AskArchinzaSearch";
import MasonryGrid from "./MasonaryGrid";

interface Chat {
  id: number;
  title: string;
  type: "regular" | "whatsapp";
  messages: { id: number; sender: "user" | "ai"; text: string; options?: string[] }[];
  gallery: { src: string; author: string }[];
  contextImages: { src: string; author: string }[];
}

export default function ChatWithImagesBottomSheet() {
  const [open, setOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const chats: Chat[] = [
  {
    id: 1,
    title: "Sustainable materials for housing",
    type: "regular",
    messages: [
      { id: 1, sender: "user", text: "What are eco-friendly materials for housing?" },
      { 
        id: 2, 
        sender: "ai", 
        text: "Hey! 🌱 You can try bamboo, recycled steel, fly-ash bricks, and rammed earth. They’re super sustainable. Are you thinking of building a small house or a bigger project?", 
      },
      { id: 3, sender: "user", text: "Probably a small home. Which one is easiest to source locally?" },
      { 
        id: 4, 
        sender: "ai", 
        text: "Bamboo is usually easiest and grows fast in many regions. Recycled steel can also be found through local suppliers. Do you want me to list suppliers nearby?", 
        options: ["Yes, please! 🙌", "Maybe later, give me more tips 💡"] 
      },
    ],
    gallery: [
      { src: "/Search-Ask/Bamboo/1.webp", author: "GreenBuild Co." },
      { src: "/Search-Ask/Bamboo/2.webp", author: "EcoMaterials Inc." },
      { src: "/Search-Ask/Bamboo/3.jpg", author: "Sustainable Homes Ltd." },
      { src: "/Search-Ask/Bamboo/4.jpg", author: "Student Designer" },
      { src: "/Search-Ask/Bamboo/5.jpg", author: "Portfolio Hub" },
      { src: "/Search-Ask/Bamboo/6.jpg", author: "Design Academy" },
            { src: "/Search-Ask/Bamboo/1.webp", author: "Portfolio Hub" },
      { src: "/Search-Ask/Bamboo/1.webp", author: "Design Academy" },
      
    ],
          contextFilters: ["Eco-friendly", "Materials", "Small Homes"],
      contextImages: [
        { src: "https://picsum.photos/seed/context1/400/400", author: "EcoMaterials Inc." },
        { src: "https://picsum.photos/seed/context2/400/420", author: "GreenBuild Co." },
      ],

  },
  {
    id: 2,
    title: "Tips for architecture portfolios",
    type: "whatsapp",
    messages: [
      { id: 1, sender: "user", text: "How should I make my architecture portfolio?" },
      { id: 2, sender: "ai", text: "Hi there! 😄 Focus on clarity, storytelling, and highlighting 3–4 strong projects. Are these projects academic or personal?" },
      { id: 3, sender: "user", text: "Mostly academic projects." },
      { id: 4, sender: "ai", text: "Perfect! Then make sure each project shows your thought process and sketches too. Want me to suggest a layout for your portfolio?" },
    ],
    gallery: [
      { src: "https://picsum.photos/seed/portfolio1/400/400", author: "Student Designer" },
      { src: "https://picsum.photos/seed/portfolio2/400/420", author: "Portfolio Hub" },
      { src: "https://picsum.photos/seed/portfolio3/400/380", author: "Design Academy" },
      { src: "https://picsum.photos/seed/portfolio4/400/400", author: "Creative Studio" },
    ],
          contextFilters: ["Eco-friendly", "Materials", "Small Homes"],
      contextImages: [
        { src: "https://picsum.photos/seed/context1/400/400", author: "EcoMaterials Inc." },
        { src: "https://picsum.photos/seed/context2/400/420", author: "GreenBuild Co." },
      ],

  },
  {
    id: 3,
    title: "Interior design inspiration",
    type: "regular",
    messages: [
      { id: 1, sender: "user", text: "Can you suggest some modern interior design ideas?" },
      { 
        id: 2, 
        sender: "ai", 
        text: "Absolutely! 🛋️ Minimalist furniture, warm neutral tones, and lots of natural light work wonders. Do you prefer cozy or open-plan spaces?", 
        options: ["Show me cozy setups 🏡", "Open-plan ideas, please ✨"] 
      },
      { id: 3, sender: "user", text: "I like open-plan spaces." },
      { 
        id: 4, 
        sender: "ai", 
        text: "Great choice! Open-plan gives a spacious feel. Want me to share some furniture arrangement tips for that style?", 
        options: ["Yes, give me tips 📝", "Maybe later ⏳"] 
      },
    ],
    gallery: [
      { src: "/Search-Ask/Interiors/1.webp", author: "HomeStyle Inc." },
      { src: "/Search-Ask/Interiors/2.jpg", author: "DecoHub" },
      { src: "/Search-Ask/Interiors/3.webp", author: "Studio Luxe" },
      { src: "/Search-Ask/Interiors/4.avif", author: "Creative Interiors" },
            { src: "/Search-Ask/Interiors/5.webp", author: "Creative Studio" },
            { src: "/Search-Ask/Interiors/6.avif", author: "Student Designer" },
      { src: "https://picsum.photos/seed/portfolio6/400/420", author: "Portfolio Hub" },
      { src: "https://picsum.photos/seed/portfolio7/400/380", author: "Design Academy" },
    ],
          contextFilters: ["Eco-friendly", "Materials", "Small Homes"],
      contextImages: [
        { src: "https://picsum.photos/seed/context1/400/400", author: "EcoMaterials Inc." },
        { src: "https://picsum.photos/seed/context2/400/420", author: "GreenBuild Co." },
      ],

  },
  {
    id: 4,
    title: "Portfolio building advice",
    type: "whatsapp",
    messages: [
      { id: 1, sender: "user", text: "Any advice for making my portfolio stand out?" },
      { id: 2, sender: "ai", text: "Hey! 😎 Start with your strongest project first and add a short story about your design choices. Do you have a theme in mind?" },
      { id: 3, sender: "user", text: "I was thinking minimalism." },
      { id: 4, sender: "ai", text: "Perfect! Minimalism is sleek. Do you want me to suggest colors and fonts that match that vibe?" },
    ],
    gallery: [
      { src: "https://picsum.photos/seed/portfolio5/400/400", author: "Student Designer" },
      { src: "https://picsum.photos/seed/portfolio6/400/420", author: "Portfolio Hub" },
      { src: "https://picsum.photos/seed/portfolio7/400/380", author: "Design Academy" },
      { src: "https://picsum.photos/seed/portfolio8/400/400", author: "Creative Studio" },
            { src: "https://picsum.photos/seed/portfolio5/400/400", author: "Student Designer" },
      { src: "https://picsum.photos/seed/portfolio6/400/420", author: "Portfolio Hub" },
      { src: "https://picsum.photos/seed/portfolio7/400/380", author: "Design Academy" },
      { src: "https://picsum.photos/seed/portfolio8/400/400", author: "Creative Studio" },
    ],
          contextFilters: ["Eco-friendly", "Materials", "Small Homes"],
      contextImages: [
        { src: "https://picsum.photos/seed/context1/400/400", author: "EcoMaterials Inc." },
        { src: "https://picsum.photos/seed/context2/400/420", author: "GreenBuild Co." },
      ],

  },
  {
    id: 5,
    title: "Landscape architecture ideas",
    type: "regular",
    messages: [
      { id: 1, sender: "user", text: "What are some creative landscaping ideas?" },
      { 
        id: 2, 
        sender: "ai", 
        text: "Hey! 🌿 You could try rooftop gardens, vertical plant walls, or small water features. Are you thinking residential or commercial?", 
        options: ["Residential charm 🌸", "Commercial wow-factor 🏢"] 
      },
      { id: 3, sender: "user", text: "Residential." },
      { 
        id: 4, 
        sender: "ai", 
        text: "Awesome! For residential, adding a small pond or a vegetable garden can be really charming. Want me to suggest plant types too?", 
        options: ["Yes, show me plants 🌱", "Nope, just ideas for now 💡"] 
      },
    ],
    gallery: [
      { src: "/Search-Ask/landscape/1.jpg", author: "GreenScapes" },
      { src: "/Search-Ask/landscape/2.avif", author: "EcoLand" },
      { src: "/Search-Ask/landscape/3.jpg", author: "Nature Designs" },
            { src: "/Search-Ask/landscape/4.webp", author: "Nature Designs" },
                  { src: "/Search-Ask/landscape/5.webp", author: "Nature Designs" },
      { src: "/Search-Ask/landscape/6.png", author: "Nature Designs" },

    ],
          contextFilters: ["Eco-friendly", "Materials", "Small Homes"],
      contextImages: [
        { src: "https://picsum.photos/seed/context1/400/400", author: "EcoMaterials Inc." },
        { src: "https://picsum.photos/seed/context2/400/420", author: "GreenBuild Co." },
      ],

  },
  {
    id: 6,
    title: "Student portfolio checklist",
    type: "regular",
    messages: [
      { id: 1, sender: "user", text: "What should I include in my architecture portfolio?" },
      { id: 2, sender: "ai", text: "Hey there! 😄 Include 3–4 strong projects, sketches, 3D renders, and a small write-up for each. Are your projects mostly academic or personal?" },
      { id: 3, sender: "user", text: "Mostly personal." },
      { id: 4, sender: "ai", text: "Perfect! Then show your unique design style. Want me to give a suggested order for the projects?" },
    ],
    gallery: [
      { src: "https://picsum.photos/seed/portfolio9/400/400", author: "Student Designer" },
      { src: "https://picsum.photos/seed/portfolio10/400/420", author: "Portfolio Hub" },
      { src: "https://picsum.photos/seed/portfolio11/400/380", author: "Design Academy" },
    ],
          contextFilters: ["Eco-friendly", "Materials", "Small Homes"],
      contextImages: [
        { src: "https://picsum.photos/seed/context1/400/400", author: "Eco-friendly" },
        { src: "https://picsum.photos/seed/context2/400/420", author: "GreenBuild Co." },
      ],

  },
  ];

  useEffect(() => {
    if (chats.length > 0) setActiveChat(chats[0]);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative w-[100vw] min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sticky top search + tabs */}
      <div className="sticky top-0 z-30 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex flex-col items-center w-full max-w-lg gap-3 p-4">
          {/* Search container with chat tabs */}
                {/* Search container */}
      <div className="flex flex-row w-full items-center justify-between border border-white/20 rounded-full shadow-lg px-3 py-2 bg-white/70 backdrop-blur-md hover:bg-white/20 transition">
        {/* Search icon + text */}
        <div className="flex items-center gap-2 text-black">
          <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <img
              src="/Personal_user/humbleicons_ai.svg"
              alt="AI"
              className="w-6 h-6"
            />
          </button>
          <span className="text-sm md:text-base font-medium">
            Search for People or Products
          </span>
        </div>

        {/* Send button (blue gradient) */}
        <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
          <img
            src="/Personal_user/mynaui_send-solid.svg"
            alt="Send"
            className="w-5 h-5 invert"
          />
        </button>

      </div>

          {/* Chat history button */}
          <div className="w-full">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium shadow-sm"
            >
              Chat History
              <ChevronDown className={`w-4 h-4 transition-transform ${showHistory ? "rotate-180" : ""}`} />
            </button>

            {showHistory && (
              <div className="mt-2 flex flex-col gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md max-h-40 overflow-y-auto">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => {
                      setActiveChat(chat);
                      setShowHistory(false);
                      setOpen(false);
                    }}
                    className="text-left text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {chat.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main screen: images */}
      <div className="p-4">
        {activeChat && (
          <MasonryGrid
            images={activeChat.gallery}
            filters={activeChat.contextImages.map((img) => ({ src: img.src, label: img.author }))}
          />
        )}
      </div>

      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />}

      {/* Bottom sheet */}
      <div
        className={`fixed left-0 right-0 z-50 transition-transform duration-500 ${
          open ? "top-[10vh] bottom-0 translate-y-0" : "translate-y-[calc(100%-4rem)] bottom-0"
        }`}
      >
        {/* Floating close button */}
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 z-50"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-200" />
          </button>
        )}

        {/* Bottom sheet content */}
        <div className="flex flex-col gap-2 bg-white dark:bg-gray-900 rounded-t-3xl px-4 py-2 shadow-sm relative border-t-2 h-full overflow-y-auto">
          {/* Header */}
          <div
            className="w-full py-3 flex items-center justify-between cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 truncate">
              {activeChat?.title}
            </h2>
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>

          {/* Chat session */}
          {activeChat && <AskArchinzaSearch chat={activeChat} />}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
