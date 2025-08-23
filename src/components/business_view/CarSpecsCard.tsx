import { useState } from "react"

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

type CarSpecsCardProps = {
  setCardRef: (el: HTMLDivElement | null, index: number) => void
  setActive: (id: number) => void
  active: number
  userInteracted: React.MutableRefObject<boolean>
  heightStyle: (isActive: boolean) => React.CSSProperties
}

export default function CarSpecsCard({
  setCardRef,
  setActive,
  active,
  userInteracted,
  heightStyle,
}: CarSpecsCardProps) {
  const [activeTab, setActiveTab] = useState<"specs" | "features">("specs")

  return (
    <div
      data-id="2"
      ref={(el) => setCardRef(el, 1)}
      onClick={() => {
        userInteracted.current = true
        setActive(2)
      }}
      style={heightStyle(active === 2)}
      className="transition-all duration-300 overflow-hidden border-b border-gray-300 dark:border-gray-700 mx-2 mt-3 cursor-pointer"
    >
      <div className="h-full dark:bg-gray-900 flex flex-col p-3">
        <h2 className="text-base font-bold">Project related Details</h2>

        {active === 2 && (
          <div className="mt-2">
            {/* Tab bar (only 2 tabs now) */}
            <div className="flex text-xs border-b border-gray-200 dark:border-gray-700">
              <button
                className={`w-1/2 py-2 font-medium text-center ${
                  activeTab === "specs"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveTab("specs")
                }}
              >
                Key Specifications
              </button>
              <button
                className={`w-1/2 py-2 font-medium text-center ${
                  activeTab === "features"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveTab("features")
                }}
              >
                Top Features
              </button>
            </div>

            {/* Tab content */}
            <div className="mt-3 text-xs">
              {activeTab === "specs" && (
                <div className="space-y-2">
                  <SpecItem label="Engine" value="1482 cc - 1497 cc" />
                  <SpecItem label="Ground Clearance" value="190 mm" />
                  <SpecItem label="Power" value="113.18 - 157.57 bhp" />
                  <SpecItem label="Torque" value="143.8 Nm - 253 Nm" />
                  <SpecItem label="Seating Capacity" value="5" />
                  <SpecItem label="Drive Type" value="FWD" />
                </div>
              )}
              {activeTab === "features" && (
                <p className="text-gray-600 dark:text-gray-400">
                  Top features will go here…
                </p>
              )}
            </div>

            {/* Footer */}
            <button className="mt-3 w-full py-2 text-red-500 font-semibold text-xs">
              View All Specs and Features →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
