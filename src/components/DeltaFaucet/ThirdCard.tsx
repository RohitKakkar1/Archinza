import { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid"
// add these imports (top of the file)
import {
  Home,
  Building2,
  Store,
  Hotel,
  Factory,
  Landmark,
  Sparkles,
  Palette,
} from "lucide-react";

// updated Tile component
const Tile = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div
    className="flex flex-col items-center justify-center w-24 h-24
               rounded-xl bg-gray-100 dark:bg-gray-700 
               border border-gray-200 dark:border-gray-600
               text-gray-800 dark:text-gray-200 
               shadow-sm"
  >
    <Icon className="w-6 h-6 mb-1" /> {/* bigger icon */}
    <span className="text-xs font-medium text-center">{label}</span>
  </div>
);


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
        <h2 className="text-m font-bold">Work Style</h2>
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
                  ? "text-white-600 border-b-2 border-white-600"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("typology")}
            >
              Project Typology
            </button>
            <button
              className={`w-1/2 py-2 font-medium text-sm px-4 ${
                activeTab === "styles"
                  ? "text-white-600 border-b-2 border-white-600"
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
    <div className="flex flex-wrap gap-2">
      <Tile icon={Home} label="Residential" />
      <Tile icon={Building2} label="Commercial" />
      <Tile icon={Store} label="Retail" />
      <Tile icon={Hotel} label="Hospitality" />
      <Tile icon={Factory} label="Industrial" />
      <Tile icon={Landmark} label="Institutional" />
    </div>
  )}

  {activeTab === "styles" && (
    <div className="flex flex-wrap gap-2">
      <Tile icon={Sparkles} label="Minimal" />
      <Tile icon={Landmark} label="Neoclassical" />
      <Tile icon={Palette} label="Modern" />
      <Tile icon={Sparkles} label="Contemporary" />
            <Tile icon={Sparkles} label="Bespoke" />
    </div>
  )}
</div>

        </div>
      )}
    </div>
  )
}
