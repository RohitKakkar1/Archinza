import React, { useState } from "react";
import { X, MapPin } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface ImagePopupProps {
  src: string;
  author: string;
  onClose: () => void;
  onViewBusiness: () => void;
}

export default function ImagePopup({
  src,
  author,
  onClose,
  onViewBusiness,
}: ImagePopupProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        text: `Lorem ipsum response from ${author}`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickMessage = (msg: string) => {
    const userMessage: Message = { text: msg, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        text: `Lorem ipsum response from ${author}`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-[90%] max-h-[90%] w-full h-full flex overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <X size={22} />
        </button>

        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <img
            src={src}
            alt={author}
            className="max-h-[90%] max-w-[90%] object-contain rounded-lg shadow"
          />
        </div>

        {/* Right: Author Info + Chat */}
        <div className="w-full md:w-1/2 flex flex-col border-l border-gray-200 dark:border-gray-700">
          {/* Author Info */}
          <div className="p-5 border-b border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {author}
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                About {author}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                This is a short bio/description area where you can tell more about the business.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Architecture", "Interior", "Sustainable", "3D Design"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Location */}
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-1" />
              <span>New Delhi, India</span>
            </div>

            {/* View Author Button */}
            <button
              onClick={onViewBusiness}
              className="w-fit px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              View {author}
            </button>
          </div>

          {/* Chat Section */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <div className="p-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Ask {author}
              </h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2 bg-gray-50 dark:bg-gray-900">
              {messages.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 ">
                  Choose from the below messages or ask anything. 
                </p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg max-w-[80%] shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white ml-auto"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-auto"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}
            </div>

            {/* Default questions */}
            <div className="flex flex-col w-fit gap-2 p-3 border-b border-gray-200 dark:border-gray-700">
              {[
                "What services do you offer?",
                "Can I see your portfolio?",
                "Do you provide discounts?",
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickMessage(q)}
                  className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  {q}
                </button>
              ))}
            </div>


            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2 bg-white dark:bg-gray-900">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
