import { useState } from "react";
import { User, Megaphone } from "lucide-react";

const BusinessStatus = () => {

  return (
    <div className="flex flex-col items-start px-4">
      {/* Image */}
      <img
        src="/BusinessView/businessStatus.png" // replace with your image path
        alt="Contact Illustration"
        className="w-full "
      />
    </div>
  );
};

export default BusinessStatus;
