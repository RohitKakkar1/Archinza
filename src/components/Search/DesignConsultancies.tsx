// DesignConsultancies.tsx

const categories = [
  {
    title: "Architects",
    consultancies: [
      { name: "LTDF Studios", img: "/Personal_user/DesignBuild/ltdf.png" },
      { name: "Studio Lotus", img: "/Personal_user/DesignBuild/lotus.png" },
      { name: "Ace Designs", img: "/Personal_user/DesignBuild/space.png" },
      { name: "Archom Design", img: "/Personal_user/DesignBuild/archom.png" },
    ],
  },
  {
    title: "Interior Designers",
    consultancies: [
      { name: "LTDF Studios", img: "/Personal_user/DesignBuild/ltdf.png" },
      { name: "Studio Lotus", img: "/Personal_user/DesignBuild/lotus.png" },
      { name: "Ace Designs", img: "/Personal_user/DesignBuild/space.png" },
      { name: "Archom Design", img: "/Personal_user/DesignBuild/archom.png" },
    ],
  },
  {
    title: "Vastu Consultants",
    consultancies: [
      { name: "LTDF Studios", img: "/Personal_user/DesignBuild/ltdf.png" },
      { name: "Studio Lotus", img: "/Personal_user/DesignBuild/lotus.png" },
      { name: "Ace Designs", img: "/Personal_user/DesignBuild/space.png" },
      { name: "Archom Design", img: "/Personal_user/DesignBuild/archom.png" },
    ],
  },
  {
    title: "MEP Consultancy",
    consultancies: [
      { name: "LTDF Studios", img: "/Personal_user/DesignBuild/ltdf.png" },
      { name: "Studio Lotus", img: "/Personal_user/DesignBuild/lotus.png" },
      { name: "Ace Designs", img: "/Personal_user/DesignBuild/space.png" },
      { name: "Archom Design", img: "/Personal_user/DesignBuild/archom.png" },
    ],
  },
  {
    title: "HVAC Consultancy",
    consultancies: [
      { name: "LTDF Studios", img: "/Personal_user/DesignBuild/ltdf.png" },
      { name: "Studio Lotus", img: "/Personal_user/DesignBuild/lotus.png" },
      { name: "Ace Designs", img: "/Personal_user/DesignBuild/space.png" },
      { name: "Archom Design", img: "/Personal_user/DesignBuild/archom.png" },
    ],
  },
  {
    title: "Landscape Design",
    consultancies: [
      { name: "LTDF Studios", img: "/Personal_user/DesignBuild/ltdf.png" },
      { name: "Studio Lotus", img: "/Personal_user/DesignBuild/lotus.png" },
      { name: "Ace Designs", img: "/Personal_user/DesignBuild/space.png" },
      { name: "Archom Design", img: "/Personal_user/DesignBuild/archom.png" },
    ],
  },
];

export default function DesignConsultancies() {
  return (
    <div className="bg-white min-h-screen  space-y-6">
      {categories.map((category, idx) => (
        <div key={idx}>
          {/* Category title */}
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-lg font-semibold">{category.title}</h2>
            <span className="text-xl">›</span>
          </div>

          {/* Consultancy grid */}
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
            {category.consultancies.map((firm, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-18 h-18 flex items-center justify-center">
                  <img
                    src={firm.img}
                    alt={firm.name}
                    className="w-18 h-18 object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-gray-800 text-sm font-medium">
                  {firm.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
