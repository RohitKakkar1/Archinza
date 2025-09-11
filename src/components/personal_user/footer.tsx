import React from "react"
import { User, Briefcase, Compass } from "lucide-react"

interface FooterProps {
  activeMain: string
  setActiveMain: (tab: string) => void
  subTabs: Record<string, string[]>
  setActiveSub: (tab: string) => void
}

const tabs = [
  { name: "For You", icon: User },
  { name: "For Projects", icon: Briefcase },
  { name: "Explore", icon: Compass },
]

export default function Footer({
  activeMain,
  setActiveMain,
  subTabs,
  setActiveSub,
}: FooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center 
                    border-t border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-gray-900 px-6 py-3 z-40">
      {tabs.map(({ name, icon: Icon }) => {
        const isActive = activeMain === name

        let classes = "flex flex-row items-center justify-center gap-1 text-sm font-medium transition px-3 py-2 rounded-lg "

        if (name === "Explore") {
          classes += isActive
            ? "bg-orange-500 text-white"
            : "bg-white text-gray-500"
        } else {
          classes += isActive
            ? "text-blue-600"
            : "text-gray-500 dark:text-gray-400"
        }

        return (
          <button
            key={name}
            onClick={() => {
              setActiveMain(name)
              if (name !== "Explore") setActiveSub(subTabs[name][0])
            }}
            className={classes}
          >
            <Icon size={20} />
            <span>{name}</span>
          </button>
        )
      })}
    </div>
  )
}
