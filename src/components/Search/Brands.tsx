// Brands.tsx
const brands = [
  { name: "Table", img: "/brands/table.jpg" },
  { name: "Chair", img: "/brands/chair.jpg" },
  { name: "Rugs", img: "/brands/rugs.jpg" },
  { name: "Lights", img: "/brands/lights.jpg" },
  { name: "Almirah", img: "/brands/almirah.jpg" },
  { name: "Bed", img: "/brands/bed.jpg" },
  { name: "Sofa", img: "/brands/sofa.jpg" },
  { name: "Mirror", img: "/brands/mirror.jpg" },
  { name: "Laminates", img: "/brands/laminates.jpg" },
  { name: "Tiles", img: "/brands/tiles.jpg" },
  { name: "3D Panels", img: "/brands/3d-panels.jpg" },
  { name: "Wallpapers", img: "/brands/wallpapers.jpg" },
  { name: "Facade", img: "/brands/facade.jpg" },
  { name: "Stone Cladding", img: "/brands/stone.jpg" },
  { name: "Countertops", img: "/brands/countertops.jpg" },
  { name: "Flooring", img: "/brands/flooring.jpg" },
];

export default function Brands() {
  return (
    <div className="bg-White min-h-screen text-black">
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={brand.img}
              alt={brand.name}
              className="w-24 h-24 object-cover rounded-lg "
            />
            <p className="mt-2 text-sm sm:text-base font-medium">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
