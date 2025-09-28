import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ChatMessage {
  id: number;
  sender: "ai" | "user";
  text?: string;
  images?: string[];
  businesses?: { logo: string; name: string; desc: string }[];
}

interface ChatDiscoveryPopupProps {
  onClose: () => void;
}

export default function ChatDiscoveryPopup({ onClose }: ChatDiscoveryPopupProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: "user", text: "Hey, I’m looking for modern living room ideas." },
    {
      id: 2,
      sender: "ai",
      text: "Sure! Let me show you some design inspirations you may like 👇",
    },
  ]);

  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Simulate AI sending content step by step
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: 3,
            sender: "ai",
            images: [
              "/Search-Ask/Interiors/1.webp",
              "/Search-Ask/Interiors/1.webp",
              "/Search-Ask/Interiors/1.webp",
              "/Search-Ask/Interiors/1.webp",

            ],
          },
        ]);
      }, 1500)
    );

    timers.push(
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: 4,
            sender: "user",
            text: "I like the second one. Can you suggest businesses for this style?",
          },
        ]);
      }, 3000)
    );

    timers.push(
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: 5,
            sender: "ai",
            text: "Absolutely! Here are some businesses that can help with this:",
          },
          {
            id: 6,
            sender: "ai",
            businesses: [
              {
                logo:"/Search-Ask/Interiors/1.webp",
                name: "Studio A",
                desc: "Experts in modern interiors.",
              },
              {
                logo: "/Search-Ask/Interiors/1.webp",
                name: "Design Co.",
                desc: "Minimalist furniture specialists.",
              },
              {
                logo: "/Search-Ask/Interiors/1.webp",
                name: "HomeLux",
                desc: "Lighting and accessories.",
              },
              {
                logo: "/Search-Ask/Interiors/1.webp",
                name: "UrbanBuild",
                desc: "Trusted contractors.",
              },
            ],
          },
        ]);
      }, 5000)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-full max-w-[70vw] h-[80vh] rounded-2xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Product Search- Chair</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}

                {/* AI image grid */}
                {msg.images && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {msg.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="AI suggestion"
                        className="w-full h-28 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {/* AI business cards */}
                {msg.businesses && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {msg.businesses.map((b, i) => (
                      <div
                        key={i}
                        className="bg-white border rounded-xl p-2 shadow-sm flex flex-col items-center text-center"
                      >
                        <img src={b.logo} alt={b.name} className="w-10 h-10 object-contain mb-2" />
                        <h3 className="font-semibold text-sm">{b.name}</h3>
                        <p className="text-xs text-gray-500">{b.desc}</p>
                        <button className="mt-2 text-xs text-blue-600 font-medium">View</button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Open in Terminal button (only for AI messages) */}
                {msg.sender === "ai" && (
                  <button className="mt-3 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-300">
                    Open in Terminal
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="border-t p-3 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
