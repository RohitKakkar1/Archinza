import React, { useState } from "react";

// Example images for demo
const sampleImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

function SettingsPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customFolders, setCustomFolders] = useState<string[]>([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [activeTab, setActiveTab] = useState("Businesses");
  const [activeBusiness, setActiveBusiness] = useState("Design or Build");

  // Basic settings
  const [darkMode, setDarkMode] = useState(false);
  const [defaultView, setDefaultView] = useState("Businesses");
  const [gridSize, setGridSize] = useState("medium");
  const [notifications, setNotifications] = useState(true);

  const businesses = [
    "Design or Build",
    "Build or Install",
    "Manufacturers",
    "Sellers",
    "Support Services",
  ];

  const types = ["Images", "Videos", "Documents"]; // example types

  const handleAddFolder = () => {
    if (newFolderName.trim() !== "") {
      setCustomFolders([...customFolders, newFolderName.trim()]);
      setNewFolderName("");
    }
  };

  const handleClearAll = () => {
    setCustomFolders([]);
  };

  const renderImages = (folderName: string) => {
    const filteredImages = sampleImages.filter((_, idx) =>
      folderName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Grid size classes
    const gridClass =
      gridSize === "small"
        ? "grid-cols-2"
        : gridSize === "medium"
        ? "grid-cols-3"
        : "grid-cols-4";

    return (
      <div className={`grid ${gridClass} gap-4 mt-4`}>
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="border rounded overflow-hidden hover:shadow-lg cursor-pointer"
          >
            <img
              src={img}
              alt={`${folderName}-${idx}`}
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`py-2 pr-2 h-screen w-full ${darkMode ? "bg-gray-900" : "bg-blue-900"}`}>
      <div className={`bg-white h-full p-4 rounded-md ${darkMode ? "bg-gray-800 text-white" : ""}`}>
        {/* Heading + Description */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            Settings
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All your saved Photos & Businesses are here. Search within them.
          </p>
        </div>


        {/* Basic Settings Section */}
        <div className="mt-8 border-t pt-4">

          <div className="flex flex-col gap-4">
            {/* Dark Mode */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              Dark Mode
            </label>

            {/* Default View */}
            <div>
              <p className="font-medium mb-1">Default View</p>
              <select
                value={defaultView}
                onChange={(e) => setDefaultView(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="Businesses">Businesses</option>
                <option value="Type">Type</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            {/* Grid Size */}
            <div>
              <p className="font-medium mb-1">Grid Size</p>
              <select
                value={gridSize}
                onChange={(e) => setGridSize(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Notifications */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              Enable Notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
