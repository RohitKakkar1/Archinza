import React, { useState } from "react";
import {
  MessageCircle,
  Building2,
  Package,
  ShoppingCart,
  Wrench,
  Leaf,
} from "lucide-react";

interface ChatMessage {
  sender: "User" | "Business";
  text: string;
}

interface Chat {
  id: number;
  businessName: string;
  businessType: string;
  icon: React.ReactNode;
  messages: ChatMessage[];
  hasReply: boolean;
}

export default function BusinessChats() {
  const chats: Chat[] = [
    {
      id: 1,
      businessName: "EcoBuild Supplies",
      businessType: "Materials",
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      hasReply: true,
      messages: [
        { sender: "User", text: "Do you have eco-friendly concrete options?" },
        { sender: "Business", text: "Yes, we provide fly-ash and recycled mix concrete." },
      ],
    },
    {
      id: 2,
      businessName: "GreenWood Pvt Ltd",
      businessType: "Wood Supplier",
      icon: <Building2 className="w-6 h-6 text-brown-500" />,
      hasReply: false,
      messages: [{ sender: "User", text: "Looking for FSC-certified wood." }],
    },
    {
      id: 3,
      businessName: "SteelWorks Pvt Ltd",
      businessType: "Manufacturers",
      icon: <Package className="w-6 h-6 text-gray-700" />,
      hasReply: false,
      messages: [{ sender: "User", text: "Can you share your steel door catalog?" }],
    },
    {
      id: 4,
      businessName: "Iron & Alloy Co.",
      businessType: "Steel Fabricator",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      hasReply: true,
      messages: [
        { sender: "User", text: "Do you supply structural steel beams?" },
        { sender: "Business", text: "Yes, we have multiple grades in stock." },
      ],
    },
    {
      id: 5,
      businessName: "Urban Installers",
      businessType: "Interior Contractors",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      hasReply: true,
      messages: [
        { sender: "User", text: "Do you also handle modular kitchens?" },
        { sender: "Business", text: "Yes, we can send you a quotation." },
      ],
    },
    {
      id: 6,
      businessName: "Elegant Spaces",
      businessType: "Interior Designers",
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      hasReply: false,
      messages: [{ sender: "User", text: "I need help with my living room design." }],
    },
    {
      id: 7,
      businessName: "FurniMart",
      businessType: "Sellers",
      icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
      hasReply: false,
      messages: [
        { sender: "User", text: "Do you have discounts on dining tables this month?" },
      ],
    },
    {
      id: 8,
      businessName: "Comfort Chairs",
      businessType: "Retailer",
      icon: <ShoppingCart className="w-6 h-6 text-pink-500" />,
      hasReply: true,
      messages: [
        { sender: "User", text: "Do you have ergonomic office chairs?" },
        { sender: "Business", text: "Yes! We have a 20% discount running." },
      ],
    },
  ];

  // Open first chat by default
  const [activeChat, setActiveChat] = useState<number>(chats[0].id);
  const currentChat = chats.find((c) => c.id === activeChat);

  return (
    <div className="flex flex-col h-screen w-full py-2 pr-2 bg-blue-900">
      <div className="bg-white p-4 rounded-md flex flex-col h-full">
        {/* Heading + Description */}
        <div className="mb-4 flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Business Chats
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            These are all the chats with businesses you’ve connected with.
          </p>
        </div>

        {/* Chat Columns */}
        <div className="flex flex-row gap-4 flex-1 overflow-hidden">
          {/* Left: All Business Chats */}
          <div className="rounded-tl-md rounded-bl-md w-1/3 border-gray-300 dark:border-gray-700 overflow-y-auto space-y-4 bg-white dark:bg-gray-900 p-2">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer ${
                  activeChat === chat.id
                    ? "bg-blue-100 border border-blue-900 dark:bg-gray-800"
                    : chat.hasReply
                    ? "bg-white dark:bg-gray-700"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {chat.icon}
                    <span
                      className={`${
                        chat.hasReply && activeChat !== chat.id
                          ? "font-bold text-gray-900 dark:text-gray-100"
                          : "font-light text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {chat.businessName}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-600">
                    {chat.businessType}
                  </span>
                </div>

                <div
                  className={`mt-2 text-sm truncate ${
                    chat.hasReply && activeChat !== chat.id
                      ? "text-gray-800 dark:text-gray-200 font-medium"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {chat.messages[chat.messages.length - 1]?.text}
                </div>

                {chat.hasReply && (
                  <div className="mt-1 flex items-center gap-1 text-xs text-green-600">
                    <MessageCircle className="w-4 h-4" />
                    Business replied
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Expanded Chat */}
          <div className="rounded-tr-md rounded-br-md flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {currentChat && (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    {currentChat.icon}
                    <div>
                      <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                        {currentChat.businessName}
                      </h2>
                      <span className="text-xs text-gray-500">
                        {currentChat.businessType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chat messages: scrollable */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                  {currentChat.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`max-w-xs p-2 rounded text-sm ${
                        msg.sender === "User"
                          ? "bg-blue-500 text-white self-end ml-auto"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 self-start mr-auto"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Input box */}
                <div className="p-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
