import { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid"

type SpecItemProps = {
  label: string
  value: string
}

function SpecItem({ label, value }: SpecItemProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

export default function ThirdCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"typology" | "styles">("typology")

  return (
    <div className="h-full dark:bg-gray-900 flex flex-col border-b border-gray-200 dark:border-gray-700 rounded-lg pb-4 w-full max-w-sm">
      {/* Header with plus/minus */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-m font-bold">Design Snapshot</h2>
        {isOpen ? (
          <MinusIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <PlusIcon className="w-5 h-5 text-gray-600" />
        )}
      </div>

      {isOpen && (
        <div className="mt-3">
          {/* Tab bar */}
          <div className="flex font-sans border-b border-gray-200 dark:border-gray-700 mt-2">
            <button
              className={`w-1/2 py-2 font-medium text-sm px-4 ${
                activeTab === "typology"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("typology")}
            >
              Project Typology
            </button>
            <button
              className={`w-1/2 py-2 font-medium text-sm px-4 ${
                activeTab === "styles"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("styles")}
            >
              Design Styles
            </button>
          </div>

          {/* Tab content */}
          <div className="mt-3 space-y-2">
            {activeTab === "typology" && (
              <div className="space-y-2">
                <SpecItem label="Renovation" value="145" />
                <SpecItem label="Project Typology" value="Commercial" />
                <SpecItem label="Design Styles" value="Modern, Minimal" />
              </div>
            )}
            {activeTab === "styles" && (
              <div className="space-y-2">
                <SpecItem label="Interior Styles" value="Contemporary" />
                <SpecItem label="Exterior Styles" value="Industrial" />
                <SpecItem label="Landscape Styles" value="Eco-friendly" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
