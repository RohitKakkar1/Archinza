import React from "react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  options?: string[];
}

interface Chat {
  id: number;
  title: string;
  type: "regular" | "whatsapp";
  messages: Message[];
  gallery: { src: string; author: string }[];
}

interface AskArchinzaSearchProps {
  chat: Chat;
}

export default function AskArchinzaSearch({ chat }: AskArchinzaSearchProps) {
  return (
    <div className="flex w-fit flex-col p-4 h-full">

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 py-3">
        {chat.messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg shadow-sm ${
                msg.sender === "user"
                  ? "bg-blue-100 text-gray-800"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              }`}
            >
              <p>{msg.text}</p>
              
              {/* Render options if present */}
              {msg.options && msg.options.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {msg.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => console.log(`Clicked option: ${opt}`)}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input area placeholder */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-orange-600">
          Send
        </button>
      </div>
    </div>
  );
}
