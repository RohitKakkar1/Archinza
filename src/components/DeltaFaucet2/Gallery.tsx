import GalleryUnit from "./GalleryUnit";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-0">
      <GalleryUnit />
      <GalleryUnit />
      <GalleryUnit />
    </div>
  );
}
