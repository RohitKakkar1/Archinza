import GalleryUnit from "./GalleryUnit";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Gallery</h2>
    <a href="#" className="text-blue-500 text-sm font-medium">Edit Gallery</a>
  </div>
      <GalleryUnit />
      <GalleryUnit />
      <GalleryUnit />
    </div>
  );
}
