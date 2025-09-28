import { useState, useEffect } from "react";
import { Plus, MessageSquare, Trash2, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AskArchinzaSearch from "./AskArchinzaSearch";
import MasonryGrid from "./MasonaryGrid";

interface Chat {
  id: number;
  title: string;
  type: "regular" | "whatsapp";
  messages: { id: number; sender: "user" | "ai"; text: string; options?: string[] }[];
  gallery: { src: string; author: string }[];
  contextFilters: string[]; // new field
  contextImages: { src: string; author: string }[]; // new field
}


export default function ChatHistory() {
  const [open, setOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);

  const [chats, setChats] = useState<Chat[]>([
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
]);





  const handleDelete = (id: number) => {
    const updated = chats.filter((c) => c.id !== id);
    setChats(updated);
    if (activeChat?.id === id) {
      setActiveChat(updated.length ? updated[updated.length - 1] : null);
    }
  };

useEffect(() => {
  if (chats.length > 0) setActiveChat(chats[0]);
}, [chats]);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex h-screen  w-fit py-2 pr-2 bg-blue-900">
      {/* Sidebar */}
      <div className="h-full ">
        {open && <div className="fixed  inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)} />}
        <div
          className={`relative rounded-tl-md rounded-bl-md bg-white z-50 h-full transition-transform duration-500 bg-gray-100 dark:bg-gray-900 shadow-md border-r border-gray-200 dark:border-gray-700
          w-64 flex flex-col ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <div className="flex items-center  justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">Chat History</h2>
            <button onClick={() => setOpen(false)} className="lg:hidden p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="w-5 h-5 text-gray-600 dark:text-gray-200" />
            </button>
          </div>

          <button className="m-3 flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 hover:bg-orange-600 text-white text-sm font-medium shadow-md">
            <Plus className="w-4 h-4" />
            New Chat
          </button>

          <div className="flex-1 overflow-y-auto no-scrollbar px-2 py-2 space-y-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer group
                  ${activeChat?.id === chat.id ? "bg-blue-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
              >
                <div className="flex items-center gap-2 truncate">
                  {chat.type === "regular" ? (
                    <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0" />
                  ) : (
                    <FaWhatsapp className="w-4 h-4 text-green-500 shrink-0" />
                  )}
                  <span className="text-sm text-gray-700 dark:text-gray-200 truncate">{chat.title}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">
            Archinza AI • Chat Assistant
          </div>
        </div>
      </div>
      {/* Active Chat Window */}
      <div className="flex-1 flex flex-col w-full ">
        {activeChat && (
          <div className="flex flex-col lg:flex-col overflow-hidden w-full 
            rounded-tr-md rounded-br-md bg-white">
            <div className="flex bg-white items-center justify-between px-4 p-3 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">{activeChat.title}</h2>
            </div>

            <div className="flex flex-row h-screen bg-white ">
                {/* Chat session: 30% width */}
                <div className="flex-[0.3]  border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
                  <AskArchinzaSearch chat={activeChat} />
                </div>

                {/* Masonry gallery: 70% width */}
                <div className="flex-[0.7] p-4  dark:bg-gray-900 overflow-y-auto">
                    <MasonryGrid images={activeChat.gallery} filters={activeChat.contextImages.map(img => ({
                      src: img.src,
                      label: img.author
                    }))} />
                </div>
            </div>
            
          </div>
        )}
      </div>

    </div>
  );
}
