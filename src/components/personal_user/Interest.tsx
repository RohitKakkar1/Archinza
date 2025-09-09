import { useState } from "react"

const categories = [
  "Jobs",
  "Events",
  "Courses",
  "Competitions",
  "Internships",
  "PR",
]

export default function InterestSelector() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="w-full max-w-md mx-auto py-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        What are you interested in?
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Select some items to improve your recommendations.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${
                selected.includes(category)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
          >
            {selected.includes(category) ? "✓ " : "+ "}
            {category}
          </button>
        ))}
      </div>

    </div>
  )
}
