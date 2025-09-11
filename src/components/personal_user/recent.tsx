type Business = {
  id: number
  name: string
  category: string
  image: string
}

const businesses: Business[] = [
  {
    id: 1,
    name: "Urban Decor Studio",
    category: "Interior Design",
    image: "/Personal_user/DesignBuild/archom.png",
  },
  {
    id: 2,
    name: "EcoBuild Materials",
    category: "Construction",
    image: "/Personal_user/DesignBuild/lotus.png",
  },
  {
    id: 3,
    name: "Bright Minds Academy",
    category: "Education",
    image: "/Personal_user/DesignBuild/ltdf.png",
  },
  {
    id: 4,
    name: "GreenLeaf Landscapes",
    category: "Landscaping",
    image: "/Personal_user/DesignBuild/space.png",
  },
    {
    id: 5,
    name: "GreenLeaf Landscapes",
    category: "Landscaping",
    image: "/Personal_user/DesignBuild/space.png",
  },
    {
    id: 6,
    name: "GreenLeaf Landscapes",
    category: "Landscaping",
    image: "/Personal_user/DesignBuild/space.png",
  },
  
]

export default function RecentlyAddedBusinesses() {
  return (
    <div className="w-full max-w-6xl mx-auto ">
      {/* Section Header */}
            <div className="flex items-center gap-3 mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Recently added Businesses</h2>
        <span className="text-xl">›</span>
      </div>

{/* Horizontal scroll container */}
{/* Grid container */}
<div className="grid grid-cols-3 gap-4">
  {businesses.map((biz) => (
    <div
      key={biz.id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      {/* Image */}
      <div className="w-full h-24">
        <img
          src={biz.image}
          alt={biz.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
          {biz.name}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {biz.category}
        </p>
      </div>
    </div>
  ))}
</div>


    </div>
  )
}
