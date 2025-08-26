import GalleryUnit from "./GalleryUnit";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-bold">Gallery</h2>

      <GalleryUnit />
      <GalleryUnit />
      <GalleryUnit />
    </div>
  );
}
