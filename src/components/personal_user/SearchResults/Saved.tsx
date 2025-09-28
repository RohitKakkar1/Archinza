import React, { useState } from "react";

// Example images for demo
const sampleImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

function Saved() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customFolders, setCustomFolders] = useState<string[]>([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [activeTab, setActiveTab] = useState("Businesses");
  const [activeBusiness, setActiveBusiness] = useState("Design or Build");

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

  const renderImages = (folderName: string) => {
    const filteredImages = sampleImages.filter((_, idx) =>
      folderName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
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
    <div className="py-2 pr-2 h-screen w-full bg-blue-900">
      

      <div className="bg-white h-full p-4 rounded-md">
                      {/* Heading + Description */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Saved Photos & Businesses
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All your saved Photos & Businesses are here. Search within them.
          </p>
        </div>
              {/* Top-level Tabs */}
              <div className="flex border-b bg-white border-gray-300 dark:border-gray-700 mb-4">
                {["Businesses", "Type", "Custom"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 -mb-px font-medium border-b-2 ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-500"
                        : "border-transparent text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search saved items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tab Content */}
              {activeTab === "Businesses" && (
                <div>
                  {/* Business Sub-Tabs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {businesses.map((biz) => (
                      <button
                        key={biz}
                        onClick={() => setActiveBusiness(biz)}
                        className={`px-4 py-1 rounded-full border ${
                          activeBusiness === biz
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-blue-400 hover:text-white transition"
                        }`}
                      >
                        {biz}
                      </button>
                    ))}
                  </div>

                  {/* Images for selected business */}
                  {renderImages(activeBusiness)}
                </div>
              )}

              {activeTab === "Type" && (
                <div>
                  {types
                    .filter((item) =>
                      item.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item) => (
                      <div key={item} className="mb-6">
                        <h3 className="font-semibold mb-2">{item}</h3>
                        {renderImages(item)}
                      </div>
                    ))}
                </div>
              )}

              {activeTab === "Custom" && (
                <div>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="New folder name"
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleAddFolder}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>

                  {customFolders.map((folder) => (
                    <div key={folder} className="mb-6">
                      <h3 className="font-semibold mb-2">{folder}</h3>
                      {renderImages(folder)}
                    </div>
                  ))}
                </div>
              )}
      </div>
    </div>
  );
}

export default Saved;
