import React, { useState } from "react";
import ChatDiscoveryPopup from "./searchpopup";

export default function DemoPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Button to open popup */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Open AI Chat
      </button>

      {/* Render the popup only when open */}
      {isChatOpen && (
        <ChatDiscoveryPopup onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
}
