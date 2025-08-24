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
      <span className="font-medium text-gray-900 dark:text-gray-100">{value}</span>
    </div>
  )
}

export default function CarSpecsCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-full  dark:bg-gray-900 flex flex-col border-b border-gray-200 dark:border-gray-700 rounded-lg pb-4 w-full max-w-sm">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-m font-bold text-gray-900 dark:text-gray-100">Business Overview</h2>
        {isOpen ? (
          <MinusIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <PlusIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        )}
      </div>

      {isOpen && (
        <div className="mt-3 space-y-2">
          <SpecItem label="Year of Establishment" value="1996" />
          <SpecItem label="Employees" value="200-300" />
          <SpecItem label="Rating" value="4.5" />
        </div>
      )}
    </div>
  )
}
