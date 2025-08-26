import GalleryUnit from "./GalleryUnit";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 items-start">
      {/* Image */}
      <img
        src="/BusinessView/contact.png" // replace with your image path
        alt="Contact Illustration"
        className="w-full max-w-sm rounded-lg shadow-md"
      />
    </div>
  );
}
